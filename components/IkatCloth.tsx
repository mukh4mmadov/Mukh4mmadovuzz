'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

const vertex =  `
attribute float aX;
attribute float aSeed;
uniform float uTime, uOpen, uIntro, uW, uH, uGap;
uniform vec2 uMouse;
varying vec2 vUv;
varying float vSeed, vLight, vFade;

float wave(vec2 p) {
  return sin(p.x * .55 + uTime * .5) * .42
       + sin(p.y * .9 - uTime * .38 + p.x * .35) * .3
       + sin((p.x + p.y) * 1.7 + uTime * .7) * .07;
}

void main() {
  float y = position.y * uH;
  vec2 p = vec2(aX, y);
  float z = wave(p);
  vec2 d = p - uMouse;
  float near = exp(-dot(d, d) * .42);
  z += near * .9;
  float e = .02;
  float dzx = (wave(p + vec2(e, 0.)) - wave(p)) / e;
  float dzy = (wave(p + vec2(0., e)) - wave(p)) / e;
  vec3 n = normalize(vec3(-dzx, -dzy, 1.));
  vLight = .5 + .62 * max(dot(n, normalize(vec3(-.45, .55, .75))), 0.) + near * .12;

  float loose = uOpen * uOpen;
  float h = fract(aSeed * 57.31) - .5;
  float g = fract(aSeed * 113.7) - .5;
  float x = aX + h * loose * 9. + sin(y * (.6 + aSeed) + uTime * .4 + aSeed * 30.) * loose * .9;
  x += normalize(d + .0001).x * near * .16;
  y += g * loose * 5.;
  z += (aSeed - .4) * loose * 6.;

  float start = (aX / uW + .5) * .55 + aSeed * .2;
  float drop = smoothstep(start, start + .28, uIntro);
  y += (1. - drop) * uH * 1.15;

  x += position.x * uGap * .92;
  vUv = vec2(aX, position.y + .5);
  vSeed = aSeed;
  vFade = 1. + loose * .25;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(x, y, z, 1.);
}`

const fragment =  `
precision highp float;
uniform float uTime, uH;
varying vec2 vUv;
varying float vSeed, vLight, vFade;

void main() {
  float jitter = (fract(sin(vSeed * 91.7) * 43758.5) - .5) * .05
               + (fract(sin(floor(vSeed * 400.) * 12.9) * 4375.5) - .5) * .02;
  float y = (vUv.y + jitter) * uH;
  float x = vUv.x;

  vec2 a = abs(fract(vec2(x / 3.2, y / 3.6)) - .5) * 2.;
  float d = a.x * .95 + a.y;
  vec2 b = abs(fract(vec2(x / 1.6 + .25, y / 1.2)) - .5) * 2.;
  float s = b.x + b.y;

  vec3 ink = vec3(.055, .065, .115);
  vec3 cream = vec3(.93, .88, .77);
  vec3 red = vec3(.78, .13, .23);
  vec3 saffron = vec3(.95, .62, .16);
  vec3 teal = vec3(.07, .50, .50);

  vec3 c = ink;
  float f = .035;
  c = mix(c, teal, smoothstep(1.34 + f, 1.34 - f, d));
  c = mix(c, cream, smoothstep(1.08 + f, 1.08 - f, d));
  c = mix(c, red, smoothstep(.98 + f, .98 - f, d));
  c = mix(c, saffron, smoothstep(.56 + f, .56 - f, d));
  c = mix(c, ink, smoothstep(.40 + f, .40 - f, d));
  c = mix(c, cream, smoothstep(.16 + f, .16 - f, d));
  float outside = smoothstep(1.34, 1.42, d);
  c = mix(c, saffron, outside * smoothstep(.34 + f, .34 - f, s));
  c = mix(c, red, outside * smoothstep(.17 + f, .17 - f, s));

  float weft = .9 + .1 * sin(vUv.y * 1500.);
  c *= weft * vLight * vFade;
  c += pow(max(vLight - .86, 0.), 2.) * vec3(1., .93, .8) * 1.6;
  float edge = smoothstep(0., .06, vUv.y) * smoothstep(1., .94, vUv.y);
  gl_FragColor = vec4(c * edge, 1.);
}`

function Threads({ open, still }: { open: React.RefObject<number>; still: boolean }) {
  const { viewport, size, invalidate } = useThree()
  const mouse = useRef(new THREE.Vector2(99, 99))
  const target = useRef(new THREE.Vector2(99, 99))
  const W = viewport.width * 1.5
  const H = viewport.height * 1.5
  const count = size.width < 700 ? 150 : 320
  const gap = W / count

  const geometry = useMemo(() => {
    const base = new THREE.PlaneGeometry(1, 1, 1, 110)
    const geo = new THREE.InstancedBufferGeometry()
    geo.index = base.index
    geo.setAttribute('position', base.getAttribute('position'))
    const xs = new Float32Array(count)
    const seeds = new Float32Array(count)
    let s = 7
    const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647)
    for (let i = 0; i < count; i++) {
      xs[i] = (i + 0.5) * gap - W / 2
      seeds[i] = rnd()
    }
    geo.setAttribute('aX', new THREE.InstancedBufferAttribute(xs, 1))
    geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 1))
    geo.instanceCount = count
    return geo
  }, [count, gap, W])
  useEffect(() => () => geometry.dispose(), [geometry])

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
        side: THREE.DoubleSide,
        uniforms: {
          uTime: { value: 4 }, uOpen: { value: 0 }, uIntro: { value: 0 },
          uW: { value: 1 }, uH: { value: 1 }, uGap: { value: 1 },
          uMouse: { value: new THREE.Vector2(99, 99) },
        },
      }),
    [],
  )
  useEffect(() => () => material.dispose(), [material])

  useEffect(() => {
    const u = material.uniforms
    u.uW.value = W
    u.uH.value = H
    u.uGap.value = gap
    if (still) u.uIntro.value = 1.2
    invalidate()
  }, [material, W, H, gap, still, invalidate])

  useEffect(() => {
    if (still) return
    const move = (e: PointerEvent) => {
      target.current.set(
        (e.clientX / window.innerWidth - 0.5) * viewport.width,
        -(e.clientY / window.innerHeight - 0.5) * viewport.height,
      )
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [viewport.width, viewport.height, still])

  useFrame((_, dt) => {
    if (still) return
    const u = material.uniforms
    const step = Math.min(dt, 0.05)
    u.uTime.value += step
    u.uIntro.value = Math.min(1.2, u.uIntro.value + step * 0.55)
    u.uOpen.value += ((open.current ?? 0) - u.uOpen.value) * Math.min(1, step * 6)
    if (mouse.current.x > 90 && target.current.x < 90) mouse.current.copy(target.current)
    mouse.current.lerp(target.current, Math.min(1, step * 5))
    u.uMouse.value.copy(mouse.current)
  })

  return <mesh geometry={geometry} material={material} frustumCulled={false} rotation={[-0.16, 0.12, -0.06]} />
}

export default function IkatCloth() {
  const open = useRef(0)
  const box = useRef<HTMLDivElement>(null)
  const [still, setStill] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setStill(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    const scroll = () => {
      open.current = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.85)))
      box.current?.closest<HTMLElement>('.hero')?.style.setProperty('--open', String(open.current))
    }
    scroll()
    window.addEventListener('scroll', scroll, { passive: true })
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting))
    if (box.current) io.observe(box.current)
    return () => {
      mq.removeEventListener('change', sync)
      window.removeEventListener('scroll', scroll)
      io.disconnect()
    }
  }, [])

  return (
    <div ref={box} className="absolute inset-0" aria-hidden>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 7], fov: 42 }}
        frameloop={still ? 'demand' : visible ? 'always' : 'never'}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <Threads open={open} still={still} />
      </Canvas>
    </div>
  )
}
