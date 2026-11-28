import type { L } from '@/lib/i18n'

const t = (en: string, uz: string, ru: string): L => ({ en, uz, ru })

export type Role = 'student' | 'support' | 'admin'

export const accounts: { role: Role; label: L; login: string; password: string; tasks: L[] }[] = [
  {
    role: 'student', label: t('Student', 'O‘quvchi', 'Ученик'), login: 'madina', password: 'demo-student',
    tasks: [
      t('Open Book and take a lesson for tomorrow.', '"Book" sahifasida ertangi darsni oling.', 'Откройте Book и запишитесь на завтра.'),
      t('A lesson is running now. Scan the teacher’s code to check in.', 'Hozir dars ketyapti. O‘qituvchi kodini skanerlab belgilaning.', 'Сейчас идёт урок. Отсканируйте код учителя.'),
      t('Look at History and the ranking.', 'History va reytingni ko‘ring.', 'Посмотрите History и рейтинг.'),
    ],
  },
  {
    role: 'support', label: t('Support teacher', 'Support o‘qituvchi', 'Support-учитель'), login: 'kamila', password: 'demo-support',
    tasks: [
      t('In Today, open the code of the running lesson. The student’s camera will see it.', '"Today" sahifasida hozirgi dars kodini oching. O‘quvchi kamerasi uni ko‘radi.', 'В Today откройте код текущего урока. Камера ученика его увидит.'),
      t('Answer a student in Chat.', 'Chat’da o‘quvchiga javob yozing.', 'Ответьте ученику в Chat.'),
      t('Close a time in Calendar.', 'Calendar’da biror vaqtni yoping.', 'Закройте время в Calendar.'),
    ],
  },
  {
    role: 'admin', label: t('Admin', 'Admin', 'Администратор'), login: 'admin', password: 'demo-admin',
    tasks: [
      t('See the booking the student just made.', 'O‘quvchi hozir qilgan bronni ko‘ring.', 'Найдите только что сделанную запись.'),
      t('Change a rule in Settings and watch the student’s screen.', 'Settings’da qoidani o‘zgartirib, o‘quvchi ekranini kuzating.', 'Измените правило в Settings и смотрите на экран ученика.'),
      t('Open Statistics and the Activity log.', 'Statistics va Activity log’ni oching.', 'Откройте Statistics и Activity log.'),
    ],
  },
]

export const demoUi = {
  title: t('Try OPUS Support', 'OPUS Support’ni sinab ko‘ring', 'Попробуйте OPUS Support'),
  lead: t(
    'A full copy of the system runs inside this page: the real application and a real Postgres database, in your browser. Nothing is installed, no password is needed, and the live centre is never touched.',
    'Tizimning to‘liq nusxasi shu sahifada ishlaydi: haqiqiy ilova va haqiqiy Postgres bazasi, brauzeringiz ichida. Hech narsa o‘rnatilmaydi, parol kerak emas, jonli markazga tegilmaydi.',
    'Полная копия системы работает прямо на странице: настоящее приложение и настоящая база Postgres в вашем браузере. Ничего не нужно устанавливать, пароль не нужен, реальный центр не затрагивается.',
  ),
  start: t('Start the demo', 'Demo’ni boshlash', 'Запустить демо'),
  size: t('Downloads about 10 MB once.', 'Bir marta 10 MB atrofida yuklanadi.', 'Один раз загрузится около 10 МБ.'),
  booting: t('Starting Postgres', 'Postgres ishga tushmoqda', 'Запуск Postgres'),
  migrating: t('Running the migrations', 'Migratsiyalar bajarilmoqda', 'Выполняются миграции'),
  people: t('Inviting invented people', 'O‘ylab topilgan odamlar qo‘shilmoqda', 'Добавляются вымышленные люди'),
  ready: t('{n} migrations ran in {s} seconds', '{n} ta migratsiya {s} soniyada bajarildi', '{n} миграций выполнено за {s} с'),
  failed: t('The demo could not start in this browser. The video shows the same system.', 'Demo bu brauzerda ishga tushmadi. Videoda o‘sha tizim ko‘rsatilgan.', 'Демо не запустилось в этом браузере. В видео показана та же система.'),
  retry: t('Try again', 'Qayta urinish', 'Повторить'),
  split: t('Side by side', 'Yonma-yon', 'Рядом'),
  single: t('One screen', 'Bitta ekran', 'Один экран'),
  reset: t('Reset data', 'Ma’lumotni tiklash', 'Сбросить данные'),
  tasks: t('Things to try', 'Nimalarni sinash mumkin', 'Что попробовать'),
  account: t('Login {l}, password {p}', 'Login {l}, parol {p}', 'Логин {l}, пароль {p}'),
  signedIn: t('You are already signed in. Use these only if you sign out.', 'Siz allaqachon kirgansiz. Chiqib ketsangiz, shular kerak bo‘ladi.', 'Вы уже вошли. Данные нужны, только если выйдете.'),
  invented: t(
    'Everyone here is invented. Push notifications and staff face checks need real devices, so they are switched off. Closing the page deletes the data.',
    'Bu yerdagi hamma odam o‘ylab topilgan. Push bildirishnoma va xodimlarning yuz tekshiruvi haqiqiy qurilma talab qiladi, shuning uchun o‘chirilgan. Sahifa yopilsa, ma’lumot o‘chadi.',
    'Все люди вымышлены. Push-уведомления и проверка лица требуют реальных устройств и отключены. При закрытии страницы данные удаляются.',
  ),
  try: t('Try the demo', 'Demo’ni sinash', 'Попробовать демо'),
  second: t('Second screen', 'Ikkinchi ekran', 'Второй экран'),
  screen: t('Screen', 'Ekran', 'Экран'),
}
