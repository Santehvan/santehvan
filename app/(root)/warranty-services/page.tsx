import Link from "next/link"
import Image from "next/image"

const page = () => {
  return (
    <section>
        <h1 className='text-[45px]'>Доставка та оплата</h1>
        <p className="text-[18px] my-1">Меблі для ванних кімнат ТМ &quot;BOTTICELLI&quot;, ТМ &quot;Juventa&quot; — це дивовижне поєднання гармонії та якості,
        спроможне зробити Ваше життя не лише комфортним і затишним, але й стильним та вишуканим.</p>
        <div className='my-4'>
            <h2 className='text-[25px]'>Гарантія на всі меблі для ванних кімнат ТМ &quot;Juventa&quot; — 24 місяці.</h2>
            <p>Перед початком експлуатації придбаного виробу уважно вивчіть рекомендації, викладені у цьому посібнику. Особливу увагу зверніть на інструкції 
            по установці меблів, регулюванню окремих вузлів та умови гарантії. Перевірте правильність і повноту заповнення гарантійного талону.</p>
        </div>

        <div className='my-4'> 
            <h2 className='text-[25px]'>Розділи паспорта:</h2>
            <ul className='list-decimal ml-5'> 
                <li>Загальні характеристики меблів</li>
                <li>Комплектація</li>
                <li>Рекомендації по установці та експлуатації меблів</li>
                <li>Рекомендації по регулюванню меблевої фурнітури у домашніх умовах</li>
                <li>Електрообладнання</li>
                <li>Гарантійні зобов’язання виробника та правила гарантійного обслуговування</li>
                <li>Гарантійний талон</li>
            </ul>
        </div>

        <div className='my-4'>
            <h2 className='text-[25px]'>1. Загальні характеристики меблів</h2>
            <p className="my-1">Меблі призначені для обладнання ванних кімнат в житлових та громадських приміщеннях.</p>
            <p className="my-1">Вироби випускаються комплектами та розподіляються по серіях, які мають єдине дизайнерське рішення.</p>
            <p className="my-1">До складу комплектів зазвичай входять такі вироби:</p>
            <ul className='list-disc ml-5'> 
                <li>Тумби з умивальниками</li>
                <li>Дзеркала</li>
                <li>Пенали</li>
            </ul>
        </div>

        <div className='my-4'>
            <h3 className='text-[22px]'>1.1. Вироби</h3>
            <p className="my-1">Тумба з умивальником (раковина) - корпусна конструкція з місцем для посадки під умивальник з одним або декількома фасадами (дверцями). Можлива наявність одного або декількох шухляд та фурнітури.</p>
            <p className="my-1">Дзеркало - дзеркальне полотно, прикріплене до основи, можлива наявність нижньої полиці. На виробі передбачене освітлення у вигляді вбудованого світильника.</p>
            <p className="my-1">Пенал - корпусна конструкція з одним або декількома навісними фасадами, полками та задньою стінкою. Комплектується навісами для кріплення до стіни.</p>
        </div>

        <div className='my-4 h3:my-5'>
            <h3 className='text-[22px]'>1.2. Матеріали та складові елементи</h3>
            <h4 className="text-[20px] my-1">КОРПУС</h4>
            <p className="my-1">Корпус меблів виготовляється з панелей ДСП або МДФ підвищеної вологостійкості, 
            опірності до зносу згідно з ГОСТ 10632-89, ГОСТ 27678-88, ГОСТ Р 52078-03 та відповідає вимогам санітарно-епідеміологічного висновку № 05.03.02-03/1562.</p>
            <p className="my-1">Добре витримує дію побутових хімічних засобів, за винятком абразивних матеріалів, їдких речовин та рідин. 
            Торцеві сторони корпусних деталей з ДСП захищені матовою або глянцевої ПВХ кромкою.</p>
            <p className="my-1">Пенал - корпусна конструкція з одним або декількома навісними фасадами, полками та задньою стінкою. Комплектується навісами для кріплення до стіни.</p>
            <h4 className="text-[20px] my-1">ФАСАДИ</h4>
            <p className="my-1">Фасади виготовлені з МДФ (Medium Density Fiberboard - деревоволокниста плита середньої щільності). МДФ відповідає європейським та вітчизняним стандартам якості, що підтверджується сертифікатами відповідності: № РОСС RU.АН 27.Н01548, 
            санітарно-епідеміологічними висновками №05.03.02-03/51932, №50.99.06.553.П.01579.01.5.</p>
            <h4 className="text-[20px] my-1">ФАРБУВАННЯ</h4>
            <p className="my-1">Фарбування корпусів та фасадних частин здійснюється за складною багатоступеневою технологією лакофарбових матеріалів провідних європейських виробників. Застосовується технологія фарбування високоглянцевими емалями ультрафіолетового затвердіння. Головними перевагами технології є твердість покриття та високий ступінь глянцю. Якість використовуваних емалей відповідає та підтверджено вимогами санітарно-епідеміологічних висновків: № 05.03.02-03/33901, 
            № 05.03.02-03/33900, № 05.03.02-03/33895, №05.03.02-3/33898, № 05.03 .02-03/33899.</p>
            <h4 className="text-[20px] my-1">ДЗЕРКАЛА</h4>
            <p className="my-1">Дзеркала, які використовуються при виробництві меблів, виготовлені з дзеркальних полотен з амальгамою на основі срібла, що має підвищену вологостійкість. Грані всіх дзеркал в обов&apos;язковому порядку відполіровані. Обробка проводиться на високоточному обладнанні з мінімальними допусками. 
            Якість дзеркальних полотен підтверджено санітарно-епідеміологічним висновком № 05.03.02-3/18832.</p>
            <h4 className="text-[20px] my-1">ФУРНІТУРА</h4>
            <p className="my-1">Високоякісна фурнітура, системи висувних шухляд, петлі, шарніри, телескопічні напрямні забезпечують довгу, надійну роботу всіх рухомих частин конструкції, відповідають як європейським, так й вітчизняним стандартам. Використання єврогвинтів, шкантів, мініфіксів, а також сам процес складання в спеціальному пресі - забезпечує високий рівень геометричності та міцності конструкцій меблів. 
            Термін придатності всіх видів фурнітури дорівнює терміну придатності виробу.</p>
            <h4 className="text-[20px] my-1">ЕЛЕКТРООБЛАДНАННЯ</h4>
            <p className="my-1">Використовувані комплекти світильників та блоки живлення у виконанні IP43 відповідають ГОСТ 17677-82, ГОСТ 8607-82 і мають сертифікат відповідності №UA1/035/007/5542-07.</p>
            <p className="my-1">Устаткування, яке входить в комплект світильників, відповідає вимогам нормативних документів: ГОСТ РМЕК 60598-1-99, ГОСТ Р 51318.15-99 і відповідає ТУ 3461-001-48934350-2001.</p>

            

        </div>

        <div>
                <h2 className='text-[25px] my-1'>2. Комплектація</h2>
                <p className="my-1">Меблі для ванних кімнат ТМ «Juventa» збираються, комплектуються, перевіряються ОТК.</p>
                <h3 className='text-[22px] my-1'>2.1. Тумба</h3>
                <p className="my-1">Тумби комплектуються умивальниками (меблевими раковинами), які мають розраховані посадкові місця під передбачений виробником умивальник. Це визначається індивідуальністю кожної моделі умивальника.</p>
                <p className="my-1"><span className="font-bold">Увага!</span>Не намагайтеся встановити на тумбу умивальник, непередбачений виробником. Це стане причиною появи щілин між умивальником та тумбою, пошкодження виробу і призведе до нестійкого положення на тумбі.</p>
                <h2>2.2. Дзеркала</h2>
                <p className="my-1">Всі дзеркальні полотна кріпляться на основу за допомогою силікону, що не пошкоджує амальгаму та забезпечує надійну фіксацію.</p>
                <p className="my-1">Світильники потужністю 20 Вт, розраховані для підключення в мережу з напругою 220 В. Їх підключення проводиться через трансформатор. Більшість моделей оснащені розеткою на 220 В і вимикачем.</p>
                <h3>2.3. Пенали</h3>
                <p className="my-1">Пенали комплектуються врізними поличками, які кріпляться за допомогою шкантів. Навісні вироби укомплектовані навісами, що регулюються (див. рис. 5), монтажною планкою та дюбелями.</p>
            </div>

            <div>
                <h2 className='text-[25px] my-1'>3. Рекомендації по установці та експлуатації меблів</h2>
                <p className="my-1">Меблі для ванних кімнат призначені для експлуатації в житлових і громадських приміщеннях при температурі від + 2 ° С до + 40 ° С при відносній вологості повітря не більше 70%.</p>
                <p className="my-1">Розробка, проєктування та випуск сучасних меблів для ванних кімнат здійснюється з урахуванням вимог Держстандартів.</p>
                <p className="my-1">Від того, на скільки правильно розташовані та встановлені меблі у ванній кімнаті залежить надійність, практичність і комфортність використання даної продукції. Не тільки якісні матеріали, з яких виготовлені меблі, але й правильний догляд за ними, забезпечить збереження та збільшить термін експлуатації.</p>
                <ul className="ml-5 list-disc">
                    <li>Тумбочки, пенали, комоди комплектуються як регульованими, так і не регульованими ніжками. Якщо Ваша модель комплектується регульованими ніжками, відрегулюйте положення виробу, обертаючи опори ніжок.</li>
                    <li>Поставте виріб до стіни впритул.</li>
                    <li>Якщо умивальник має спеціальні отвори для кріплення до стінки, закріпіть його.</li>
                    <li>Не допускається прямий контакт виробу з водою, оскільки висока вологість та ймовірно близьке розташування джерела тепла, може вплинути на зміну кольору, розбухання фасадів і корпусних частин.</li>
                    <li>Для збереження первісного блиску фасадів не допускати висихання на них води.</li>
                    <li>У разі потрапляння води всередину виробу, меблі необхідно протерти м&apos;  якою сухою тканиною.</li>
                    <li>Догляд за виробами потрібно здійснювати за допомогою м&apos;якої тканини, з використанням нейтральних мильних рідин, які призначені для догляду за меблями.</li>
                    <li>Поверхні меблів слід оберігати від потрапляння розчинників, кислот, лугів, механічних ударів, подряпин і т.д.</li>
                    <li>При механічному пошкодженні деталей ДСП і МДФ, місце пошкодження слід зачистити та покрити гідроізолюючими матеріалами (фарба на лаковій основі відповідного кольору, силіконовий герметик, фарба нітроцелюлозна або акрилова, лак і т.д.).</li>
                    <li>У разі якщо при установці виникла необхідність зробити виріз у деталях виробу, то зрізи обов&apos;язково повинні бути надійно ізольовані від води гідроізолюючими матеріалами (фарба на лаковій основі відповідного кольору, силіконовий герметик, фарба нітроцелюлозна або акрилова, лак і т.д.).</li>
                    <li>При ослабленні вузлів різьбових з&apos;єднань необхідно їх періодично підтягувати.</li>
                    <li>Для виробів, які мають кронштейн кріплення до стіни, використовувати фурнітуру для кріплення з комплекту постачання.</li>
                    <li>Не залишайте відкриті отвори без заглушок. Вийнявши кріплення для полиць, обов&apos;язково закрийте отвори заглушками. При потраплянні у відкриті отвори води існує ймовірність розбухання матеріалу.</li>
                    <li>Не зберігайте всередині меблів вологих речей та тари з рідинами, які протікають.</li>
                </ul>
                <p className="my-1"><span className="font-bold">Увага!</span> При недотриманні рекомендацій, правил експлуатації, в разі самостійного виконання вирізів в деталях виробу без гідроізоляції відкритих зрізів, ТМ «Juventa» має право відмовити у гарантійному обслуговуванні та не несе подальшої відповідальності за експлуатацію пошкодженого Вами виробу.</p>
                <p className="my-1">Рекомендації при установці навісних виробів:</p>
                <ul className="ml-5 list-disc">
                    <li>Зробити розмітку на стіні в місцях, де планується встановити кріплення виробу;</li>
                    <li>Закріпити монтажну планку або дюбеля;</li>
                    <li>Рекомендована відстань від верхньої поверхні умивальника до нижнього краю дзеркала С = 150-250 мм (див. рис. 3.1)</li>
                </ul>
                <div className="text-center items-center flex flex-col">
                    <Image src='/assets/3_1.jpg' width={700} height={405} alt='схема'></Image>
                    Рис. 3.1
                </div>


            </div>

        <div>
            <h2 className='text-[25px]'>4. Рекомендації по регулюванню меблевої фурнітури у домашніх умовах</h2>
            <p className="my-1">У процесі експлуатації виробу можливе послаблення різьбових з&apos;єднань кріпильних елементів меблів, особливо рухомих. В цьому випадку необхідно періодично (за потреби) підтягувати гвинти в петлях та монтажних планках. Якщо ручка прокручується (не допускається, оскільки в цьому випадку можуть залишитися подряпини на фасаді), необхідно підтягнути гвинти, якими вона кріпиться. Якщо фасад шухляди зачіпає іншу фасадну частину, то необхідно здійснити його регулювання.</p>
            <p className="my-1">Крім того, нарізні сполучення є і в нерухомих кріпильних елементах - регульованих навісах. Якщо шафа нещільно прилягає до стіни, слід підтягнути гвинти навісу (див. рис. 4.3.1-2).</p>

            <h3 className='text-[22px]'>4.1. Регулювання петель</h3>
            <p className="my-1">Усі використовувані петлі мають можливість регулювання. При необхідності Ви можете самостійно здійснити регулювання, за допомогою викрутки (див. рис. 4.1.1-4.1.3).</p>

         
                <div className="w-fit mx-auto">
                    <Image src='/assets/4_1.jpg' alt="схема" width={1000} height={300}></Image>
                    <div className="flex justify-between px-3">
                        <p>4.1.1 По глибині</p>
                        <p>4.1.2 По ширині</p>
                        <p>4.1.3 По висоті</p>
                    </div>
                </div>
          
            <h3 className='text-[22px]'>4.2. Регулювання навісів</h3>
            <div className="w-fit mx-auto">
                    <Image src='/assets/4_2.jpg' alt="схема" width={800} height={200}></Image>
                    <div className="flex justify-between px-3">
                        <p>4.2.1 По висоті</p>
                        <p>4.2.2 По глибині</p>
                      
                    </div>
                </div>
        </div>

        <div>
            <h2 className="text-[25px]">5. Електрообладнання</h2>
            <p>Світильники та блоки живлення (IP43), якими комплектуються вироби (дзеркала), відповідають ГОСТ 17677-82; ГОСТ 8607-82 і сертифікату відповідності №UA1/035/007/5542-07</p>
            <p className="my-2">У ванних кімнатах квартир та номерах готелів допускається встановлення меблів з електрообладнанням в зоні 3 (згідно з додатком 2 ПБЕ, Київ - 2001) через розподільні трансформатори або пристрій захисного відключення (ПЗВ), який реагує на диференційований струм з номінальною напругою, що не перевищує 30 мА.</p>
            <p><span className="font-bold">Увага!Примітка:</span> При монтажі виробів, в яких є електрообладнання, користуйтеся послугами електрика! Обов&apos;язково встановити на вході електромережі Пристрій Захисного Відключення (ПЗВ), 30 мА. </p>
        </div>

        <div>
            <h2 className="text-[25px]">6. Упаковка</h2>
            <p>Усі меблі ТМ «Juventa» поставляються в упаковці з п’ятишарового гофрокартону. По периметру меблі обгорнуті стрейч-плівкою та пінополіізолом. Фаянс упакований в гофрокартон.</p>
        </div>

        <div>
            <h2>7. Гарантійні зобов’язання виробника та правила гарантійного обслуговування</h2>
            <ul className='list-decimal ml-5'> 
                <li><Link href='https://juventa.ua/uk/' className="text-blue">ТМ «Juventa»</Link> (далі «Виробник») гарантує, що на момент покупки, придбані Вами меблі (далі «Виріб»), які вказані у гарантійному талоні, є комплектними, не мають механічних пошкоджень та відповідають встановленим стандартам якості, вимогам безпеки та умовам договору купівлі-продажу.</li>
                <li>Підприємство гарантує відповідність виробів - «Меблів для ванних кімнат» вимогам ГОСТ 16371-93 «Меблі. Загальні технічні умови» при дотриманні умов транспортування, зберігання та експлуатації.</li>
                <li> Виробник забезпечує безоплатний ремонт виробу лише у разі виявлення дефектів виробничого характеру.</li>
                <li>Комплектність виробу перевіряється покупцем при отриманні товару у присутності продавця. Після продажу виробу претензії щодо його комплектності та механічних пошкоджень (сліди ударів, відколи, плями і т.п.) не приймаються.</li>
                <li>Виробник залишає за собою право відмови у безоплатному гарантійному ремонті в наступних випадках:
                <ul className='list-disc'>
                        <li>Якщо виріб має сліди стороннього втручання або спроби самостійного ремонту</li>
                        <li>Якщо виявлено несанкціоновані зміни конструкції виробу</li>
                        <li>Якщо виріб експлуатувався не за своїм цільовим призначенням або в умовах, для яких він непризначений</li>
                        <li>Якщо виріб використовувався з фурнітурою, яка не передбачена виробником</li>
                        <li>Якщо у гарантійному талоні присутні виправлення, які не завірені виробником</li>
                        <li>Якщо виявлені пошкодження виробу, викликані неправильним підключенням до електромережі</li>
                        <li>Якщо виявлені сліди зберігання всередині меблів мокрих та вологих речей, а також розшарування, розтріскування і розбухання фасадних деталей та частин корпусу внаслідок прямого потрапляння на них води</li>
                        <li>Якщо дефект утворився у результаті відсутності періодичного підтягування різьбових з&apos;єднань в міру потреби</li>
                    
                    
                    </ul>
                </li>
                <li>Гарантія не поширюється на наступні недоліки:
                    <ul className='list-disc'>
                        <li>Механічні пошкодження, як внутрішні, так і зовнішні, отримані у результаті неправильної експлуатації, установки або транспортування</li>
                        <li>Пошкодження, викликані потраплянням на поверхню виробу їдких речовин та рідин</li>
                        <li>Пошкодження, викликані стихією, пожежею, побутовими факторами</li>
                    </ul>
                </li>
                <li>Гарантія дійсна при наявності гарантійного талона, завіреного печаткою продавця та підписаного покупцем. Усі поля, зазначені в гарантійному талоні, обов&apos;язкові до заповнення!</li>
                <li> Гарантійний термін експлуатації виробу встановлюється протягом 24-х місяців при експлуатації в індивідуальних житлових приміщеннях та протягом 18-ти місяців при експлуатації в громадських місцях (комерційних структурах, театрах, будинках відпочинку, готелях і т.д.).</li>         
                <li>Тривалість гарантійного терміну вказується у гарантійному талоні та починається з дати придбання виробу.</li>
                <li>Дата продажу та дата виготовлення виробу вказуються у гарантійному талоні.</li>
                <li>Гарантія на замінені комплектуючі припиняється разом з гарантією на виріб.</li>
                <li>Виробник знімає з себе відповідальність за можливу шкоду, прямо або побічно викликану продукцією ТМ «Juventa» людям, домашнім тваринам, майну в разі, якщо це сталося у результаті недотримання правил та умов експлуатації, встановлення виробу, умисних або необережних дій споживача або третіх осіб.</li>
            </ul>

            <p className="my-1">У разі виявлення несправностей або дефектів слід звернутися до ТМ «Juventa» через продавця у порядку, передбаченому чинним законодавством, подавши рекламацію.</p>
            <p className="my-1">З усіх питань та при виникненні непорозумінь звертатися в ТМ «Juventa» — reclamation@juventa.ua або через офіційний сайт компанії www.juventa.ua</p>
        </div>
        <Image src='/assets/talon.png' alt='talon' width={1000} height={10}></Image>
        <h2 className="text-[25px] my-4">Сертифікат FSC® Chain-of-Custody</h2>
        <Image src='/assets/sertificate.jpg' alt='sertificate' width={1000} height={10} className="mx-auto"></Image>
    </section>
  )
}

export default page