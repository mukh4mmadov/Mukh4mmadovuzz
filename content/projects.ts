import type { L } from '@/lib/i18n'
import type { Project } from './types'

const t = (en: string, uz: string, ru: string): L => ({ en, uz, ru })

export const projects: Project[] = [
  {
    slug: 'opus-support',
    kind: 'production',
    name: 'OPUS Support',
    accent: '#2fb7a8',
    status: t('Live since November 2026, the centre is starting to use it', '2026-yil noyabrdan jonli, markaz ishlatishni boshlayapti', 'Работает с ноября 2026, центр начинает использовать'),
    tagline: t(
      'Lesson booking for a learning centre, with every rule enforced in the database.',
      'O‘quv markaz uchun dars bron qilish tizimi. Har bir qoidani baza nazorat qiladi.',
      'Запись на занятия для учебного центра: каждое правило соблюдает база данных.',
    ),
    problem: t(
      'I volunteered at OPUS Learning Center. Its support lessons ran on a very old-fashioned system, so I proposed a new one. Two students must never get the same slot, missed lessons must have consequences, and the centre has to know that teachers really came to work.',
      'OPUS Learning Center’da volontyor bo‘lganman. Support darslari juda eskicha tizimda yurgan, shuning uchun yangisini o‘zim taklif qildim. Bitta vaqt ikki o‘quvchiga tushmasligi, kelmagan dars oqibatsiz qolmasligi va o‘qituvchining rostdan ham ishga kelgani ko‘rinishi kerak.',
      'Я был волонтёром в OPUS Learning Center. Support-занятия велись по очень старой системе, и я предложил новую. Один слот не должен достаться двоим, пропуски должны иметь последствия, а центр должен знать, что учитель действительно пришёл.',
    ),
    approach: [
      t(
        'Every rule lives in Postgres as a guarded function. The browser asks; the database decides. A modified client gains nothing.',
        'Har bir qoida Postgres ichida, himoyalangan funksiya sifatida turadi. Brauzer so‘raydi, baza hal qiladi. Klientni o‘zgartirish foyda bermaydi.',
        'Каждое правило живёт в Postgres как защищённая функция. Браузер просит, база решает. Изменённый клиент ничего не даёт.',
      ),
      t(
        'Attendance takes proof. Students check in by QR. Teachers need a QR that changes every 10 seconds, their location and a face check.',
        'Davomat isbot talab qiladi. O‘quvchi QR bilan belgilanadi. O‘qituvchiga har 10 soniyada almashadigan QR, joylashuv va yuz tekshiruvi kerak.',
        'Посещаемость требует доказательств. Ученик отмечается по QR. Учителю нужны QR, который меняется каждые 10 секунд, геопозиция и проверка лица.',
      ),
      t(
        'Limits and deadlines are settings, so the centre changes them without a release. Four roles see four different applications.',
        'Limit va muddatlar sozlamada, markaz ularni release’siz o‘zgartiradi. To‘rtta rol to‘rt xil ilovani ko‘radi.',
        'Лимиты и сроки вынесены в настройки, центр меняет их без релиза. Четыре роли видят четыре разных приложения.',
      ),
    ],
    limits: [
      t('Real use has only begun, so there are no long-term usage numbers yet.', 'Haqiqiy foydalanish endi boshlandi, shuning uchun uzoq muddatli raqamlar hali yo‘q.', 'Реальное использование только началось, долгосрочных данных ещё нет.'),
      t('Staff can view the password they issued until the user changes it.', 'Xodim o‘zi bergan parolni foydalanuvchi almashtirguncha ko‘ra oladi.', 'Сотрудник видит выданный пароль, пока пользователь его не сменит.'),
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind', 'TanStack Query', 'Supabase', 'Postgres', 'Deno', 'PWA', 'Playwright'],
    live: 'https://opus-support-uz.vercel.app',
    repo: 'https://github.com/mukh4mmadov/opus-support-source',
    demo: '/demo/opus-support',
    metrics: [
      { value: '277', label: t('unit and database tests passing', 'unit va baza testi o‘tdi', 'модульных тестов и тестов базы проходят'), source: t('Vitest run, 25 November 2026', 'Vitest, 2026-yil 25-noyabr', 'Запуск Vitest, 25 ноября 2026') },
      { value: '32', label: t('database migrations', 'baza migratsiyasi', 'миграции базы данных'), source: t('supabase/migrations', 'supabase/migrations', 'supabase/migrations') },
      { value: '9 772', label: t('lines of SQL', 'qator SQL', 'строк SQL'), source: t('all migrations together', 'barcha migratsiyalar birga', 'все миграции вместе') },
      { value: '4', label: t('roles with separate permissions', 'alohida huquqli rol', 'роли с отдельными правами'), source: t('student, teacher, reception, developer', 'o‘quvchi, o‘qituvchi, reception, dasturchi', 'ученик, учитель, ресепшен, разработчик') },
    ],
    nodes: [
      { id: 'student', x: 120, y: 90, label: 'Student PWA', tone: 'client', desc: t('Installable app: book, move, check in, rate.', 'O‘rnatiladigan ilova: bron, ko‘chirish, check-in, baho.', 'Устанавливаемое приложение: запись, перенос, отметка, оценка.') },
      { id: 'teacher', x: 120, y: 240, label: 'Teacher PWA', tone: 'client', desc: t('Sees topics in advance, shows the lesson QR, proves arrival.', 'Mavzuni oldindan ko‘radi, dars QR’ini ko‘rsatadi, kelganini isbotlaydi.', 'Видит темы заранее, показывает QR урока, подтверждает приход.') },
      { id: 'admin', x: 120, y: 390, label: 'Admin desk', tone: 'client', desc: t('Users, days off, complaints, statistics, audit log.', 'Foydalanuvchilar, dam kunlari, shikoyatlar, statistika, audit.', 'Пользователи, выходные, жалобы, статистика, журнал.') },
      { id: 'rpc', x: 430, y: 240, label: 'Guarded RPCs', tone: 'rules', desc: t('SECURITY DEFINER functions. Each one starts by checking who is calling.', 'SECURITY DEFINER funksiyalar. Har biri avval kim chaqirganini tekshiradi.', 'Функции SECURITY DEFINER. Каждая сначала проверяет, кто её вызвал.') },
      { id: 'edge', x: 430, y: 420, label: 'Edge functions', tone: 'rules', desc: t('Account actions and push delivery, the only code holding server secrets.', 'Akkaunt amallari va push. Server kalitlari faqat shu kodda.', 'Действия с аккаунтами и push. Только здесь есть серверные ключи.') },
      { id: 'db', x: 720, y: 150, label: 'Postgres', tone: 'store', desc: t('Tables are closed to clients. A unique index makes a double booking impossible.', 'Jadvallar klientga yopiq. Unique index ikki marta bron qilishga yo‘l qo‘ymaydi.', 'Таблицы закрыты для клиентов. Уникальный индекс исключает двойную запись.') },
      { id: 'cron', x: 720, y: 290, label: 'Maintenance job', tone: 'store', desc: t('Runs every minute: reminders, missed lessons, expired requests.', 'Har daqiqada: eslatmalar, qoldirilgan darslar, eskirgan so‘rovlar.', 'Каждую минуту: напоминания, пропуски, истёкшие запросы.') },
      { id: 'push', x: 720, y: 430, label: 'Web Push', tone: 'ext', desc: t('Notifications reach the phone when the app is closed.', 'Ilova yopiq bo‘lsa ham bildirishnoma telefonga boradi.', 'Уведомления приходят, даже когда приложение закрыто.') },
    ],
    edges: [['student', 'rpc'], ['teacher', 'rpc'], ['admin', 'rpc'], ['admin', 'edge'], ['rpc', 'db'], ['cron', 'db'], ['cron', 'push'], ['edge', 'push']],
    flows: [
      {
        id: 'book', label: t('Two students tap one slot', 'Ikki o‘quvchi bitta vaqtni bosdi', 'Двое нажали на один слот'), path: ['student', 'rpc', 'db'],
        steps: [
          t('Both phones send the same slot at the same moment.', 'Ikki telefon bir paytda bir xil vaqtni yuboradi.', 'Два телефона одновременно отправляют один слот.'),
          t('The function locks the student row, then checks bans, limits and dates.', 'Funksiya o‘quvchi qatorini qulflaydi, so‘ng ban, limit va sanani tekshiradi.', 'Функция блокирует строку ученика и проверяет баны, лимиты и даты.'),
          t('The unique index accepts one insert. The other phone hears that the slot is gone.', 'Unique index bitta yozuvni qabul qiladi. Ikkinchi telefonga vaqt band deyiladi.', 'Уникальный индекс принимает одну запись. Второй телефон узнаёт, что слот занят.'),
        ],
      },
      {
        id: 'remind', label: t('A reminder goes out', 'Eslatma yuboriladi', 'Отправляется напоминание'), path: ['db', 'cron', 'push'],
        steps: [
          t('Upcoming lessons are read in the centre’s own time zone.', 'Yaqin darslar markazning vaqt mintaqasida o‘qiladi.', 'Ближайшие занятия читаются в часовом поясе центра.'),
          t('The job picks lessons that are due and not yet announced.', 'Vazifa vaqti kelgan va hali aytilmagan darslarni tanlaydi.', 'Задача выбирает занятия, о которых ещё не сообщали.'),
          t('The message is delivered even if the app is closed.', 'Xabar ilova yopiq bo‘lsa ham yetadi.', 'Сообщение доходит даже при закрытом приложении.'),
        ],
      },
    ],
    excerpts: [
      {
        file: 'supabase/migrations/0001_schema.sql',
        note: t('One line decides every race: a teacher can have one active booking per start time.', 'Barcha poygani bitta qator hal qiladi: o‘qituvchida har vaqtga bitta faol bron.', 'Все гонки решает одна строка: у учителя одна активная запись на время.'),
        code: `create unique index bookings_slot_uq
  on public.bookings (support_id, starts_at)
  where status = 'booked';`,
      },
      {
        file: 'supabase/migrations/0002_core.sql',
        note: t('The student row is locked first, so two tabs run one after the other. The loser of a race gets a clear answer instead of a database error.', 'Avval o‘quvchi qatori qulflanadi, ikki oyna navbat bilan ishlaydi. Poygada yutqazgan baza xatosi emas, aniq javob oladi.', 'Сначала блокируется строка ученика, поэтому две вкладки идут по очереди. Проигравший получает понятный ответ, а не ошибку базы.'),
        code: `perform 1 from public.profiles
  where id = v_student and role = 'student' and is_active for update;

begin
  insert into public.bookings (
    student_id, support_id, lesson_date, starts_at, ends_at, topic, created_by
  ) values (v_student, p_support, v_date, p_starts_at, v_end, v_topic, v_me)
  returning * into v_booking;
exception when unique_violation then
  raise exception 'SLOT_UNAVAILABLE';
end;`,
      },
    ],
  },
  {
    slug: 'k-talim',
    kind: 'production',
    name: 'K-TALIM',
    accent: '#e2485d',
    status: t('Live at ktalim.uz', 'ktalim.uz manzilida jonli', 'Работает на ktalim.uz'),
    tagline: t(
      'A Korean course for Uzbek speakers, with exams and a spoken AI partner.',
      'O‘zbek tilida koreys tili kursi: imtihonlar va gapiradigan AI sherik bilan.',
      'Курс корейского на узбекском: экзамены и голосовой ИИ-собеседник.',
    ),
    problem: t(
      'Korean vocabulary, grammar, listening, reading, speaking and TOPIK practice in one place, explained in Uzbek, English or Russian.',
      'Koreyscha so‘z, grammatika, tinglash, o‘qish, gapirish va TOPIK mashqi bir joyda, o‘zbek, ingliz yoki rus tilida.',
      'Корейская лексика, грамматика, аудирование, чтение, речь и TOPIK в одном месте на узбекском, английском или русском.',
    ),
    approach: [
      t('Words in topic decks, scheduled by FSRS-5, plus listening, quiz and writing practice, in Uzbek, English and Russian.', 'Mavzuli so‘zlar FSRS-5 bilan rejalashtiriladi, tinglash, test va yozish mashqi bor. Uch tilda.', 'Тематические слова по расписанию FSRS-5, аудирование, тесты и письмо на трёх языках.'),
      t('A speaking partner listens to a recorded turn, answers in Korean and corrects it. The server checks the time left before the AI runs and adds the seconds used afterwards.', 'Gapirish sherigi yozuvni tinglaydi, koreyscha javob beradi va tuzatadi. Server qolgan vaqtni AI’dan oldin tekshiradi, sarflanganini keyin qo‘shadi.', 'Собеседник слушает реплику, отвечает по-корейски и исправляет. Сервер проверяет остаток времени до ИИ и добавляет потраченное после.'),
      t('Learners can call each other: the database pairs people at the same level by waiting time, and the voice goes from browser to browser.', 'O‘quvchilar bir-biriga qo‘ng‘iroq qila oladi: baza bir darajadagilarni kutish vaqtiga qarab juftlaydi, ovoz brauzerdan brauzerga boradi.', 'Ученики могут звонить друг другу: база сводит людей одного уровня по времени ожидания, голос идёт из браузера в браузер.'),
      t('TOPIK practice runs like the computer exam, and an admin desk corrects content without a release.', 'TOPIK mashqi kompyuter imtihonidek ishlaydi, admin paneli mazmunni release’siz tuzatadi.', 'Практика TOPIK идёт как компьютерный экзамен, а админка правит материал без релиза.'),
    ],
    limits: [
      t('AI feedback can be wrong, so it supports the learner and does not grade an official exam.', 'AI fikri xato bo‘lishi mumkin. U yordam beradi, rasmiy imtihonni baholamaydi.', 'Отзыв ИИ может ошибаться: он помогает, но не заменяет официальную оценку.'),
      t('The package has no automated test script.', 'Paketda avtomatik test skripti yo‘q.', 'В пакете нет скрипта автотестов.'),
    ],
    stack: ['React', 'Redux Toolkit', 'i18next', 'Supabase', 'Postgres', 'Vercel Functions', 'Gemini API', 'PWA'],
    live: 'https://www.ktalim.uz',
    repo: 'https://github.com/mukh4mmadov/lugat',
    metrics: [
      { value: '3', label: t('interface languages', 'interfeys tili', 'языка интерфейса'), source: t('Uzbek, English, Russian', 'o‘zbek, ingliz, rus', 'узбекский, английский, русский') },
      { value: '12', label: t('server functions', 'server funksiyasi', 'серверных функций'), source: t('api folder', 'api papkasi', 'папка api') },
      { value: '31', label: t('database migrations', 'baza migratsiyasi', 'миграция базы'), source: t('supabase/migrations', 'supabase/migrations', 'supabase/migrations') },
    ],
    nodes: [
      { id: 'app', x: 120, y: 160, label: 'Learner PWA', tone: 'client', desc: t('Study, exams and speaking practice.', 'O‘qish, imtihon va gapirish mashqi.', 'Учёба, экзамены и речь.') },
      { id: 'desk', x: 120, y: 370, label: 'Admin desk', tone: 'client', desc: t('Edits words and topics, answers feedback.', 'So‘z va mavzularni tahrirlaydi, fikrlarga javob beradi.', 'Правит слова и темы, отвечает на отзывы.') },
      { id: 'api', x: 420, y: 160, label: 'API functions', tone: 'rules', desc: t('Check the session and origin before any AI call.', 'AI chaqiruvidan oldin sessiya va manbani tekshiradi.', 'Проверяют сессию и источник до вызова ИИ.') },
      { id: 'quota', x: 420, y: 370, label: 'Quota', tone: 'rules', desc: t('Burst and daily limits, so one person cannot use up the budget.', 'Daqiqalik va kunlik limit: bir kishi byudjetni tugata olmaydi.', 'Минутные и дневные лимиты защищают бюджет.') },
      { id: 'ai', x: 720, y: 90, label: 'Gemini', tone: 'ext', desc: t('Listens to speech and answers with corrections.', 'Nutqni tinglaydi va tuzatish bilan javob beradi.', 'Слушает речь и отвечает с исправлениями.') },
      { id: 'sb', x: 720, y: 250, label: 'Supabase', tone: 'store', desc: t('Accounts, progress, content edits.', 'Akkaunt, progress, mazmun tahriri.', 'Аккаунты, прогресс, правки.') },
      { id: 'counter', x: 720, y: 400, label: 'ai_quota table', tone: 'store', desc: t('One row per key and Tashkent day, changed by one atomic statement.', 'Har kalit va Toshkent kuniga bitta qator, bitta atomar buyruq bilan o‘zgaradi.', 'Одна строка на ключ и ташкентский день, меняется одной атомарной командой.') },
    ],
    edges: [['app', 'api'], ['app', 'sb'], ['desk', 'api'], ['api', 'quota'], ['api', 'ai'], ['api', 'sb'], ['quota', 'counter']],
    flows: [
      {
        id: 'speak', label: t('A learner says one sentence', 'O‘quvchi bitta gap aytdi', 'Ученик говорит фразу'), path: ['app', 'api', 'quota', 'counter', 'quota', 'api', 'ai'],
        steps: [
          t('The browser records the turn as 16 kHz audio.', 'Brauzer gapni 16 kHz audio qilib yozadi.', 'Браузер записывает реплику в 16 кГц.'),
          t('The function checks the session and the origin.', 'Funksiya sessiya va manbani tekshiradi.', 'Функция проверяет сессию и источник.'),
          t('A per-minute cap and a per-network cap are taken.', 'Daqiqalik va tarmoq limiti olinadi.', 'Берутся минутный и сетевой лимиты.'),
          t('The counters live in Postgres, so every server shares them.', 'Hisoblagichlar Postgres’da, barcha serverlar uchun bitta.', 'Счётчики в Postgres, общие для всех серверов.'),
          t('If a cap is used up, the request stops here.', 'Limit tugagan bo‘lsa, so‘rov shu yerda to‘xtaydi.', 'Если лимит исчерпан, запрос останавливается.'),
          t('The seconds already used today are compared with the allowance.', 'Bugun sarflangan soniyalar ruxsat bilan solishtiriladi.', 'Потраченные сегодня секунды сверяются с лимитом.'),
          t('Only now does the model hear the recording.', 'Model yozuvni shundan keyingina eshitadi.', 'Только теперь модель слышит запись.'),
        ],
      },
    ],
    excerpts: [
      {
        file: 'api/speaking-ai.js',
        note: t('The daily allowance resets at midnight where the learners live, not at UTC midnight.', 'Kunlik limit UTC emas, o‘quvchilar yashaydigan joyning yarim tunida yangilanadi.', 'Дневной лимит обновляется в полночь по времени учеников, а не по UTC.'),
        code: `export const tashkentDay = (now = Date.now()) =>
  new Date(now + 5 * 60 * 60 * 1000).toISOString().slice(0, 10);`,
      },
    ],
  },
  {
    slug: 'omzu',
    kind: 'lab',
    name: 'OMZU',
    accent: '#f0a63a',
    status: t('Runs on my computer, not deployed', 'Kompyuterimda ishlaydi, deploy qilinmagan', 'Работает на моём компьютере, не развёрнут'),
    tagline: t('A 110-million-parameter language model for Uzbek, and the assistant around it.', 'O‘zbek tili uchun 110 mln parametrli til modeli va uning atrofidagi yordamchi.', 'Языковая модель на 110 млн параметров для узбекского и ассистент вокруг неё.'),
    problem: t(
      'An assistant for Uzbek where the model, the tokenizer and the tools are all part of the project.',
      'O‘zbek tili uchun yordamchi: model, tokenizer va vositalar shu loyihaning o‘zida.',
      'Ассистент для узбекского, где модель, токенизатор и инструменты: часть проекта.',
    ),
    approach: [
      t('Clean Uzbek and English text, train a 32,000-token BPE tokenizer, then pretrain a GPT on Kaggle (two T4 GPUs).', 'O‘zbekcha va inglizcha matn tozalanadi, 32 000 tokenli BPE tokenizer o‘qitiladi, so‘ng GPT Kaggle GPU’larida pretrain qilinadi.', 'Очистка текста, BPE-токенизатор на 32 000 токенов, затем предобучение GPT на GPU Kaggle.'),
      t('The model is small, so facts come from a search over 231,000 Uzbek Wikipedia articles and live data comes from tools.', 'Model kichik, shuning uchun faktlar o‘zbekcha Vikipediyaning 231 ming maqolasidan qidiriladi, jonli ma’lumotni vositalar beradi.', 'Модель мала, поэтому факты берутся из поиска по 231 тыс. статей узбекской Википедии, а живые данные из инструментов.'),
      t('A 52-question test was run on five configurations, and a guard makes the assistant say it does not know.', '52 savollik test besh xil sozlamada o‘tkazilgan, himoya esa bilmaganda "bilmayman" dedirtadi.', 'Тест из 52 вопросов прогнан на пяти конфигурациях, а защита заставляет признавать незнание.'),
    ],
    limits: [
      t('It is not smart enough for open questions. Asked about the Silk Road, it describes a radio station of that name.', 'Erkin savollarga yetarlicha aqlli emas. Ipak yo‘li so‘ralganda, shu nomli radio haqida gapiradi.', 'Для открытых вопросов ума не хватает. На вопрос о Шёлковом пути она описывает одноимённое радио.'),
      t('The test looks for key words, so it passes some wrong answers, including that one. The score of 36 is too generous.', 'Test kalit so‘zni qidiradi, shuning uchun ba’zi xato javoblarni, jumladan o‘shani ham to‘g‘ri sanaydi. 36 ball haddan tashqari saxiy.', 'Тест ищет ключевые слова и засчитывает часть неверных ответов, включая этот. Балл 36 завышен.'),
    ],
    repo: 'https://github.com/mukh4mmadov/omzu',
    stack: ['Python', 'PyTorch', 'FastAPI', 'SQLite FTS5', 'React 19', 'Kaggle T4'],
    metrics: [
      { value: '109.5M', label: t('parameters', 'parametr', 'параметров'), source: t('counted from the model', 'modeldan sanalgan', 'подсчитано по модели') },
      { value: '36/52', label: t('on a keyword test that is too generous', 'haddan tashqari saxiy kalit so‘z testida', 'в тесте по ключевым словам, завышено'), source: t('see the limits below', 'kamchiliklarga qarang', 'см. ограничения ниже') },
      { value: '32 000', label: t('tokens in the vocabulary', 'lug‘atdagi token', 'токенов в словаре'), source: t('own BPE tokenizer', 'o‘z BPE tokenizeri', 'собственный BPE') },
      { value: '35', label: t('tests passing', 'test o‘tdi', 'тестов проходят'), source: t('pytest, 25 November 2026', 'pytest, 2026-yil 25-noyabr', 'pytest, 25 ноября 2026') },
    ],
    nodes: [
      { id: 'ui', x: 120, y: 240, label: 'Chat UI', tone: 'client', desc: t('React interface with feedback on every answer.', 'Har javobga fikr qoldiriladigan React interfeys.', 'Интерфейс на React с оценкой ответов.') },
      { id: 'router', x: 400, y: 240, label: 'Router', tone: 'rules', desc: t('Decides: tool, knowledge search or the model.', 'Vosita, bilim qidiruvi yoki modelni tanlaydi.', 'Выбирает инструмент, поиск или модель.') },
      { id: 'tools', x: 700, y: 90, label: 'Tools', tone: 'ext', desc: t('Weather, exchange rate, calculator, reminders.', 'Ob-havo, kurs, kalkulyator, eslatma.', 'Погода, курс, калькулятор, напоминания.') },
      { id: 'kb', x: 700, y: 240, label: 'Knowledge', tone: 'store', desc: t('Full-text search over 231,000 articles.', '231 ming maqola bo‘ylab matn qidiruvi.', 'Полнотекстовый поиск по 231 тыс. статей.') },
      { id: 'gpt', x: 700, y: 390, label: 'GPT 110M', tone: 'rules', desc: t('12 layers, RoPE, RMSNorm, SwiGLU, KV cache.', '12 qatlam, RoPE, RMSNorm, SwiGLU, KV-kesh.', '12 слоёв, RoPE, RMSNorm, SwiGLU, KV-кеш.') },
    ],
    edges: [['ui', 'router'], ['router', 'tools'], ['router', 'kb'], ['router', 'gpt'], ['kb', 'gpt']],
    flows: [
      {
        id: 'ask', label: t('A fact is asked', 'Fakt so‘raladi', 'Задан вопрос о факте'), path: ['ui', 'router', 'kb', 'gpt'],
        steps: [
          t('"Who was Ulugh Beg?" is typed in Uzbek.', '"Mirzo Ulug‘bek kim?" deb yoziladi.', 'Вводится «Кто такой Улугбек?» на узбекском.'),
          t('The router sees a factual question.', 'Yo‘naltirgich faktli savolni taniydi.', 'Маршрутизатор распознаёт вопрос о факте.'),
          t('The search returns the passage that fits best.', 'Qidiruv eng mos parchani qaytaradi.', 'Поиск возвращает лучший фрагмент.'),
          t('The answer is written from that passage.', 'Javob shu parcha asosida yoziladi.', 'Ответ составляется по этому фрагменту.'),
        ],
      },
    ],
    excerpts: [
      {
        file: 'uzllm/model.py',
        note: t('The KV cache: earlier tokens are not computed again, so generation stays fast on a laptop.', 'KV-kesh: oldingi tokenlar qayta hisoblanmaydi, noutbukda ham tez ishlaydi.', 'KV-кеш: прошлые токены не пересчитываются, генерация быстрая даже на ноутбуке.'),
        code: `q, k = apply_rope(q, cos, sin), apply_rope(k, cos, sin)
past = 0
if cache is not None:
    if "k" in cache:
        past = cache["k"].size(2)
        k = torch.cat([cache["k"], k], dim=2)
        v = torch.cat([cache["v"], v], dim=2)
    cache["k"], cache["v"] = k, v`,
      },
    ],
  },
  {
    slug: 'ielts-reading',
    kind: 'lab',
    name: 'IELTS Practice',
    accent: '#7fa7ff',
    status: t('Live, still growing', 'Jonli, rivojlanmoqda', 'Работает, развивается'),
    tagline: t('Reading and listening practice with mock tests and progress.', 'Reading va listening mashqi, mock testlar va progress bilan.', 'Практика чтения и аудирования с пробными тестами и прогрессом.'),
    problem: t('Practise IELTS reading, listening and writing in an exam-style screen, with a timer and saved progress.', 'IELTS reading, listening va writing’ni imtihonga o‘xshash ekranda, taymer va saqlanadigan progress bilan mashq qilish.', 'Практика чтения, аудирования и письма IELTS на экране как на экзамене, с таймером и сохранением прогресса.'),
    approach: [
      t('Passages and recordings open in a test-like screen, are marked at once and saved to a profile.', 'Matn va audiolar imtihonga o‘xshash ekranda ochiladi, darhol tekshiriladi va profilga saqlanadi.', 'Тексты и записи открываются как на экзамене, сразу проверяются и сохраняются.'),
      t('Admin pages hold analytics, feedback and support chat.', 'Admin sahifalarida analitika, fikr va support chat bor.', 'В админке аналитика, отзывы и чат поддержки.'),
    ],
    limits: [t('There are 33 reading passages and four listening tests. All of it is unofficial practice content.', '33 ta reading matni va 4 ta listening testi bor. Hammasi norasmiy mashq materiali.', 'Есть 33 текста и четыре теста аудирования. Всё это неофициальные материалы.')],
    stack: ['Next.js 15', 'React', 'Supabase', 'Tailwind', 'Web Push'],
    live: 'https://mukh4mmadovoriginal.vercel.app',
    repo: 'https://github.com/mukh4mmadov/mukh4mmadovoriginal',
    metrics: [],
  },
  {
    slug: 'crypto-dashboard',
    kind: 'lab',
    name: 'Crypto Dashboard',
    accent: '#9ad06b',
    status: t('Course project, finished', 'Kurs loyihasi, tugallangan', 'Учебный проект, завершён'),
    tagline: t('Coin prices with search, paging and a watchlist.', 'Koin narxlari, sahifalangan ro‘yxat va kuzatuv ro‘yxati.', 'Цены монет, постраничный список и избранное.'),
    problem: t('A course exam project: coin prices from the public CoinGecko API.', 'Kurs imtihoni loyihasi: ochiq CoinGecko API’dan koin narxlari.', 'Экзаменационный проект курса: цены монет из публичного API CoinGecko.'),
    approach: [t('React with routing, a carousel of trending coins and paginated results.', 'React, routing, trenddagi koinlar karuseli va sahifalash.', 'React, маршрутизация, карусель трендов и пагинация.')],
    limits: [t('The price chart on the coin page is still empty.', 'Koin sahifasidagi narx grafigi hali bo‘sh.', 'График цены на странице монеты пока пуст.')],
    stack: ['React', 'Axios', 'Tailwind', 'React Router'],
    live: 'https://8-oy-imtixon-mu.vercel.app',
    repo: 'https://github.com/mukh4mmadov/8-oy-imtixon',
    metrics: [],
  },
  {
    slug: 'online-store',
    kind: 'lab',
    name: 'Online Store',
    accent: '#d58ad6',
    status: t('Course project, finished', 'Kurs loyihasi, tugallangan', 'Учебный проект, завершён'),
    tagline: t('A furniture shop with a catalogue, filters and translation.', 'Katalog, filtr va tarjimali mebel do‘koni.', 'Мебельный магазин с каталогом, фильтрами и переводом.'),
    problem: t('A course project: a furniture shop on a store API.', 'Kurs loyihasi: do‘kon API’si asosidagi mebel do‘koni.', 'Учебный проект: мебельный магазин на API.'),
    approach: [t('Products come from an API and the text is translated with i18next.', 'Mahsulotlar API’dan keladi, matn i18next bilan tarjima qilinadi.', 'Товары из API, тексты переведены через i18next.')],
    limits: [t('There is no real payment or order delivery.', 'Haqiqiy to‘lov va yetkazib berish yo‘q.', 'Настоящей оплаты и доставки нет.')],
    stack: ['React', 'i18next', 'DaisyUI', 'Axios'],
    live: 'https://4-dars-vazifa111.vercel.app',
    repo: 'https://github.com/mukh4mmadov/4-dars-vazifa111',
    metrics: [],
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)
