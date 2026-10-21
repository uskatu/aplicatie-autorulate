// Conținutul proiectului: Motivația și rolul ei în activitatea umană
// Folosit și de generatorul PPTX și de cel DOCX

const TITLU = "Motivația și rolul ei în activitatea umană";
const SUBTITLU = "Perspective de abordare a motivației, rolul structurii motivaționale a personalității în activitatea instructiv-educativă, tehnici motivaționale de predare";
const FACULTATE = "Universitatea „Vasile Alecsandri” din Bacău";
const FAC2 = "Facultatea de Științe ale Mișcării, Sportului și Sănătății";
const GRUPA = "Grupa 5104 SPM";
const MEMBRI = ["Membru 1: ____________________", "Membru 2: ____________________", "Membru 3: ____________________", "Membru 4: ____________________"];

// Fiecare parte: titlu, cine, slide-uri (cu puncte), text de vorbit (paragrafe)
const PARTI = [
  {
    nr: 1,
    titlu: "Ce este motivația și cum este structurată",
    cine: "Membrul 1",
    durata: "7-8 minute",
    slides: [
      {
        titlu: "Ce înseamnă motivația",
        puncte: [
          "Tot ce ne pune în mișcare din interior, ne dă o direcție și ne ține pe drum",
          "Răspunde la întrebarea „de ce” facem ceva, nu „cum” facem",
          "Nu se vede direct: o deducem din efort, perseverență, alegeri",
          "Fără motivație, capacitatea rămâne nefolosită"
        ],
        vizual: "definitie"
      },
      {
        titlu: "Structura motivațională a personalității",
        puncte: [
          "Trebuințe: îți lipsește ceva și simți asta (apă, mișcare, un grup)",
          "Motive: știi ce îți lipsește și asta te împinge să faci ceva",
          "Interese: spre ce te tragi mereu (sportul, muzica)",
          "Convingeri: idei la care ții și pe care le aperi",
          "Idealuri: cum ai vrea să fii și ce ai vrea să ajungi"
        ],
        vizual: "scara"
      },
      {
        titlu: "Funcțiile motivației",
        puncte: [
          "Activare: te scoate din stat, îți dă energie",
          "Orientare: alege o direcție, un scop",
          "Susținere: ține efortul în timp, chiar cu piedici",
          "Reglare: potrivește efortul după situație"
        ],
        vizual: "patru"
      },
      {
        titlu: "Motivație intrinsecă și extrinsecă",
        puncte: [
          "Intrinsecă (din interior): îți place lucrul în sine (jocul, curiozitatea)",
          "Extrinsecă (din exterior): o faci pentru ceva din afară (nota, lauda, medalia, să scapi de pedeapsă)",
          "Nu sunt opuse, de obicei coexistă",
          "Cea din interior ține mai mult, cea din exterior pornește motorul când lipsește prima"
        ],
        vizual: "doua"
      },
      {
        titlu: "Legea optimului motivațional",
        puncte: [
          "Yerkes și Dodson (1908): performanța crește cu motivația, dar numai până la un punct",
          "Prea puțină motivație: plictiseală, efort mic, rezultate slabe",
          "Prea multă motivație: emoții, crispare, greșeli (sportivul care „îngheață” la concurs)",
          "La sarcini simple merge motivație mare, la cele complicate e nevoie de una potrivită"
        ],
        vizual: "curba"
      }
    ],
    text: [
      "Bună ziua. Proiectul nostru e despre motivație: ce este, de ce avem nevoie de ea și cum o folosește un profesor, mai ales la educație fizică. Eu încep cu partea de bază: ce este motivația, din ce e făcută și cum merge. Colegii mei continuă cu teoriile care o explică, cu rolul ei la ore și cu ce poate face concret un profesor la clasă sau în sala de sport. La final vom face împreună o activitate practică.",
      "Să pornim de la o situație simplă. Doi elevi din aceeași clasă, cam la fel de bine făcuți, primesc aceeași sarcină: să alerge 800 de metri. Unul termină, celălalt se oprește după două ture. Diferența nu e că unul poate și celălalt nu. Diferența e de motivație. Și de asta contează subiectul: motivația e cea care face dintr-un lucru pe care îl poți un lucru pe care chiar îl faci. Fără ea, orice talent rămâne nefolosit.",
      "Definiția cu care lucrăm e asta: motivația e tot ce ne pune în mișcare din interior, ne dă o direcție și ne ține pe drum. Trei lucruri, deci: ne pornește, ne arată încotro și ne ține acolo când vine greul. Motivația răspunde la întrebarea „de ce” facem ceva, nu la „cum” facem. Un lucru important: motivația nu se vede direct. Nu-i poți lua cuiva motivația ca pe tensiune, cu un aparat. O deducem din ce face: cât efort depune, cât timp rezistă și ce alege când are de ales.",
      "Al doilea punct e structura motivațională a personalității. Sună greu, dar înseamnă doar că motivația nu e un singur lucru, ci mai multe, așezate pe niveluri, de la cele simple la cele mari. Așa o descriu Cosmovici și Zlate. La bază stau trebuințele: îți lipsește ceva și simți asta. Trebuința de apă, de hrană, de mișcare, dar și trebuința de apartenență la un grup sau de apreciere. Când îți dai seama ce îți lipsește și te gândești la un lucru anume care ți-ar rezolva lipsa, trebuința devine motiv. Motivul e cel care te împinge efectiv să faci ceva. Mai sus sunt interesele: lucrurile spre care te tragi mereu, unul spre sport, altul spre muzică. Se formează în timp și te țin constant. Apoi convingerile, idei la care ții și pe care le aperi: de exemplu convingerea că munca se răsplătește. Și în vârf, idealurile: cum ai vrea să fii și ce ai vrea să ajungi. Un copil care vrea „să ajungă ca antrenorul lui” are un ideal care îi pune în ordine tot ce face.",
      "De ce contează asta pentru un profesor? Pentru că fiecare elev e aranjat altfel. Unul vrea să se afirme, altul vrea să se simtă în siguranță, altuia îi place pur și simplu jocul. Același lucru, de exemplu o întrecere, pe primul îl pornește și pe al doilea îl blochează. Un profesor bun învață să citească ce îl mișcă pe fiecare elev.",
      "Motivația face patru lucruri. Unu, activarea: ne scoate din stat și ne dă energie. Doi, orientarea: alege o direcție, un scop. Trei, susținerea: ține efortul în timp, chiar când apar piedici. Patru, reglarea: potrivește efortul după situație. Când un sportiv își dozează puterile într-o cursă lungă, asta e reglarea.",
      "Următoarea împărțire e cea mai folosită în practică: motivația intrinsecă și cea extrinsecă, adică din interior și din exterior. Intrinsecă înseamnă că faci lucrul pentru că îți place lucrul în sine. Copilul care joacă fotbal pentru că îi place jocul, nu pentru că îl vede cineva. Extrinsecă înseamnă că faci lucrul pentru ceva din afară: nota, lauda profesorului, medalia, sau ca să scapi de o pedeapsă. Important: cele două nu se bat cap în cap, de obicei stau împreună. Un sportiv de performanță iubește sportul lui, dar vrea și premiul. Studiile, mai ales ale lui Deci și Ryan, despre care o să vorbească colegul meu, arată că motivația din interior ține mai mult și te face să te simți mai bine. Asta nu înseamnă că motivația extrinsecă e ceva rău. La elevii care n-au încă o pasiune, de multe ori de aici se pornește. Rolul profesorului e să pornească de la ce vine din afară și să construiască încet-încet plăcerea pentru lucrul în sine.",
      "Închei cu legea optimului motivațional, a lui Yerkes și Dodson, din 1908. Ideea e că rezultatele cresc odată cu motivația, dar numai până la un punct. Dacă desenăm, iese o curbă ca un deal. În stânga e prea puțină motivație: elevul e plictisit, nu se străduiește, rezultatele sunt slabe. În mijloc e zona bună. În dreapta e prea multă: presiunea mare aduce emoții, crispare și greșeli. Este sportivul care s-a antrenat perfect și „îngheață” exact la concurs. Legea mai spune ceva de folos: la sarcini simple merge o motivație mare, dar la cele complicate, care cer coordonare și cap limpede, e nevoie de o motivație potrivită, nu la maximum. Pentru un profesor de educație fizică asta înseamnă că nu trebuie mereu să încingă atmosfera. Înainte de un concurs, de multe ori e mai de folos să o calmeze.",
      "Cam astea sunt bazele. Pe ele se sprijină tot ce urmează. Îi dau cuvântul colegului meu, care o să prezinte cum explică psihologii motivația."
    ]
  },
  {
    nr: 2,
    titlu: "Perspective de abordare a motivației",
    cine: "Membrul 2",
    durata: "7-8 minute",
    slides: [
      {
        titlu: "Perspectiva behavioristă",
        puncte: [
          "Skinner: comportamentul urmat de recompensă se repetă, cel urmat de pedeapsă se stinge",
          "Motivația = tot ce ai primit până acum, recompense și pedepse",
          "Aplicare: laudă, puncte, recompense, feedback imediat",
          "Limită: dacă dispare recompensa, dispare și comportamentul"
        ],
        vizual: "cerc"
      },
      {
        titlu: "Perspectiva umanistă: Maslow",
        puncte: [
          "Nevoile sunt pe trepte: fiziologice, siguranță, apartenență, stimă, autorealizare",
          "Treapta de sus apare abia după ce cele de jos sunt rezolvate",
          "Un elev flămând, obosit sau speriat nu e disponibil pentru învățare",
          "Clasa trebuie să fie un loc sigur înainte de a fi un loc de performanță"
        ],
        vizual: "piramida"
      },
      {
        titlu: "Perspectiva cognitivă",
        puncte: [
          "Atkinson: în noi se bat dorința de a reuși și frica de a greși",
          "Weiner (teoria atribuirii): contează pe cine dai vina",
          "„Nu m-am antrenat destul” (depinde de mine) ține motivația",
          "„N-am talent”, „arbitrul” (nu depinde de mine) o omoară"
        ],
        vizual: "atribuire"
      },
      {
        titlu: "Teoria autodeterminării: Deci și Ryan",
        puncte: [
          "Trei nevoi de bază: autonomie (să aleg), competență (să mă descurc), relaționare (să fiu acceptat)",
          "Când sunt împlinite, motivația vine din interior și ține",
          "Când nu sunt împlinite, elevul nu mai vede rostul (amotivare)",
          "O scară: fără motivație → din exterior → din interior"
        ],
        vizual: "trei"
      },
      {
        titlu: "Autoeficacitatea: Bandura",
        puncte: [
          "Încrederea că „pot face asta” spune cât te străduiești și cât reziști",
          "De unde vine: reușite proprii, cineva ca mine care reușește, încurajare, cum mă simt",
          "Cea mai puternică: am reușit eu înainte",
          "Sarcini din ce în ce mai grele, cu reușită sigură la început"
        ],
        vizual: "surse"
      }
    ],
    text: [
      "Mulțumesc. Colega mea a explicat ce este motivația. Eu o să arăt cum au explicat-o psihologii, pentru că nu există o singură teorie corectă. Fiecare a prins o bucată din adevăr și fiecare îi dă profesorului altă unealtă. Trec prin cinci: cea behavioristă, cea umanistă, cea cognitivă, teoria autodeterminării și teoria autoeficacității. Le explic pe rând, pe înțeles.",
      "Prima e cea behavioristă, a lui Skinner. Ideea e simplă: un comportament urmat de o recompensă tinde să se repete, iar un comportament urmat de o pedeapsă sau de nimic tinde să dispară. Pentru Skinner, motivația este practic istoricul recompenselor și pedepselor pe care le-a primit cineva. În școală asta înseamnă: laudă, puncte, steluțe, recompense, feedback pe loc. În sala de sport funcționează foarte bine: un „bravo” spus imediat după o execuție corectă întărește execuția. Limita se vede repede: dacă dispare recompensa, dispare și comportamentul. Elevul care face sport doar pentru notă se oprește când nu mai e notă.",
      "A doua e cea umanistă, cu Abraham Maslow și piramida lui, pe care sigur ați mai văzut-o. Maslow spune că nevoile omului sunt așezate pe cinci trepte. La bază, trebuințele fiziologice: hrană, apă, somn. Apoi siguranța: fizică și emoțională. Apoi apartenența: să fii acceptat de grup. Apoi stima: respectul celorlalți și respectul de sine. Și în vârf, autorealizarea: să devii ceea ce poți deveni. Regula e că treapta de sus apare abia după ce treptele de jos sunt rezolvate. Pentru profesor, asta înseamnă ceva foarte practic: un elev flămând, nedormit sau speriat nu este disponibil pentru învățare, oricât de bună ar fi lecția. Un copil căruia îi e frică că râd ceilalți de el la ora de sport nu se bagă, pentru că nu se simte în siguranță. Întâi clasa trebuie să fie un loc sigur. Performanța vine după.",
      "A treia e cea cognitivă, care se uită la cum gândim despre reușită și eșec. Atkinson spune că în noi se bat două forțe: dorința de a reuși și frica de a greși. Elevii la care e mai tare dorința de a reuși aleg sarcini mijlocii, unde reușita depinde de ei. Cei la care e mai tare frica aleg ori ceva foarte ușor, ori ceva imposibil, pentru că în ambele cazuri nu-i poate învinovăți nimeni. Weiner a dus ideea mai departe cu teoria atribuirii, adică pe cine dai vina. Contează enorm. Dacă elevul își spune „am pierdut pentru că nu m-am antrenat destul”, motivația rămâne, pentru că data viitoare poate schimba ceva. Dacă își spune „n-am talent” sau „arbitrul a fost părtinitor”, motivația moare, pentru că nu mai are ce face. De aici iese o regulă simplă pentru profesor: lauzi efortul, nu talentul.",
      "A patra e teoria autodeterminării, a lui Deci și Ryan, probabil cea mai folosită teorie a motivației din ultimii patruzeci de ani. Ei spun că toți oamenii au trei nevoi de bază. Autonomia: să simți că tu alegi, că nu ești împins. Competența: să simți că te descurci, că progresezi. Relaționarea: să te simți legat de ceilalți, acceptat. Când aceste trei nevoi sunt satisfăcute, motivația devine intrinsecă și durabilă. Când nu sunt împlinite, apare ce ei numesc amotivare: elevul nu mai vede rostul. Teoria descrie și o scară: de la lipsa totală de motivație, prin motivația din exterior, până la cea din interior. Profesorul poate urca elevul pe scara asta dându-i de ales, sarcini pe măsura lui și un grup în care se simte acceptat.",
      "A cincea e teoria autoeficacității, a lui Albert Bandura. Autoeficacitate înseamnă, simplu, încrederea că „pot face asta”. Bandura a arătat că încrederea asta spune mai bine decât talentul real cât se va strădui cineva și cât timp va rezista. Încrederea asta vine din patru locuri. Cel mai tare: am reușit eu înainte, deci cred că pot din nou. Al doilea: văd pe cineva ca mine că reușește, deci pot și eu. Al treilea: mă încurajează cineva în care am încredere. Al patrulea: cum mă simt fizic, oboseala și emoțiile scad încrederea. Pentru educația fizică asta înseamnă sarcini din ce în ce mai grele, dar cu reușită sigură la început, ca elevul să adune reușite.",
      "Dacă le punem pe toate cinci una lângă alta, fiecare îi dă profesorului câte ceva: Skinner dă feedbackul și recompensa, Maslow dă siguranța și locul în grup, Atkinson și Weiner dau felul în care vorbim despre reușită și eșec, Deci și Ryan dau libertatea de a alege, Bandura dă sarcinile crescătoare. Colegul meu o să arate cum se văd toate astea la ore."
    ]
  },
  {
    nr: 3,
    titlu: "Rolul structurii motivaționale în activitatea instructiv-educativă",
    cine: "Membrul 3",
    durata: "7-8 minute",
    slides: [
      {
        titlu: "Motivația în triunghiul didactic",
        puncte: [
          "Elevul: vine cu ce are el (nevoi, interese, frici)",
          "Profesorul: face atmosfera și e exemplu, motivația lui se vede",
          "Ce e de învățat: place sau nu în funcție de cum e prezentat",
          "Învățarea adevărată e unde se întâlnesc toate trei"
        ],
        vizual: "triunghi"
      },
      {
        titlu: "Motivația pentru învățare la elev",
        puncte: [
          "Motive cognitive: curiozitatea, vrei să înțelegi",
          "Motive afective: vrei să te aprecieze profesorul și colegii",
          "Motive de autorealizare: vrei să fii mai bun, să te depășești",
          "Motive negative: teama de notă slabă, de pedeapsă, de rușine"
        ],
        vizual: "patru"
      },
      {
        titlu: "Specificul educației fizice și sportului",
        puncte: [
          "Epuran: în sport motivația se vede direct, în efort",
          "Copiilor le place să se miște de la natură, dar plăcerea se pierde dacă e sufocată",
          "Întrecerea pe unii îi pornește, pe alții îi blochează",
          "Corpul e la vedere: la adolescenți rușinea e o frână mare"
        ],
        vizual: "sport"
      },
      {
        titlu: "Climat de măiestrie sau climat de ego",
        puncte: [
          "Climat de măiestrie: reușita = ai progresat tu, te-ai străduit, ai învățat",
          "Climat de ego: reușita = ești mai bun decât ceilalți",
          "Măiestria aduce rezistență, plăcere, mai puține emoții",
          "Ego-ul îi pornește doar pe cei câțiva care câștigă mereu"
        ],
        vizual: "doua"
      },
      {
        titlu: "Modelul TARGET pentru climat de măiestrie",
        puncte: [
          "Task: sarcini variate, pe măsura fiecăruia",
          "Authority: elevii au un cuvânt de spus",
          "Recognition: lauzi progresul, între patru ochi",
          "Grouping: grupuri mixte, schimbate des",
          "Evaluation: față de propriul progres, nu față de ceilalți",
          "Time: timp suficient pentru a învăța"
        ],
        vizual: "target"
      }
    ],
    text: [
      "Mulțumesc. Până acum am văzut ce este motivația și cum o explică teoriile. Eu vorbesc despre rolul ei în activitatea instructiv-educativă, adică, pe românește, în ce se întâmplă la oră, între profesor, elev și ce e de învățat.",
      "Putem privi lecția ca un triunghi cu trei vârfuri: elevul, profesorul și conținutul. Motivația umblă între ele. Elevul vine la oră cu ce are el: nevoi, interese, frici, păreri despre sine, cum a arătat colega mea în prima parte. Profesorul nu stă pe margine: el face atmosfera și e el însuși un exemplu. Un profesor care vine plictisit la oră transmite plictiseala. Unul căruia îi place ce face transmite și asta, fără să vrea. Iar ce e de învățat, fie că e un exercițiu de gimnastică sau o regulă de joc, place sau nu place în funcție de cum e prezentat. Învățarea adevărată se întâmplă doar unde se întâlnesc toate trei.",
      "Să ne uităm mai atent la ce îl face pe elev să învețe. Ioan Neacșu, în cartea lui despre motivație și învățare, descrie mai multe feluri de motive. Cele cognitive: curiozitatea, vrei să înțelegi cum merge ceva. Cele afective: vrei să te aprecieze profesorul, să te accepte colegii. Cele de autorealizare: vrei să fii mai bun, să te depășești. Și, din păcate, cele negative: teama de notă slabă, de pedeapsă, de rușine în fața clasei. Motivele negative merg pe termen scurt, dar au un cost. Elevul învață să evite, nu să caute. Când tot ce îl mișcă este frica, în momentul în care dispare controlul dispare și efortul.",
      "Educația fizică e altfel decât celelalte materii, și Mihai Epuran a scris mult despre asta. În sport, motivația se vede direct, în efort. Nu te poți preface că alergi. De asta sportul e un loc foarte bun ca să vezi motivația și ca să o crești. Alt lucru: copiilor le place să se miște de la natură. Copiii mici aleargă de plăcere. Plăcerea asta se pierde dacă e sufocată de exerciții plictisitoare, de comparații mereu cu alții și de critică. Mulți adolescenți care spun că urăsc sportul au iubit mișcarea la cinci ani. Cineva i-a dezvățat pe drum. Apoi întrecerea: pe unii elevi îi pornește tare, pe alții îi blochează de tot, mai ales pe cei care pierd mereu. Și încă ceva: în sport corpul e la vedere. La adolescenți, rușinea de propriul corp e una dintre cele mai mari frâne, și profesorul trebuie să țină cont de asta când face activitățile.",
      "Aici apare ideea de climat motivațional, de la Carole Ames, dusă în sport de Joan Duda. Climat înseamnă atmosfera de la oră, și profesorul o face, de multe ori fără să-și dea seama, în unul din două feluri. Climatul de măiestrie: reușita înseamnă că ai progresat tu, că te-ai străduit, că ai învățat ceva nou. Climatul de ego: reușita înseamnă că ești mai bun decât ceilalți. Studiile sunt clare. În climatul de măiestrie elevii rezistă mai mult, le place mai mult și au mai puține emoții, toți. Climatul de ego îi pornește doar pe cei câțiva care câștigă mereu, iar pe restul îi învață să se ferească. Asta nu înseamnă că scoatem competiția. Ne întrecem în continuare, dar ce se numără la final este cu cât ai progresat tu față de tine.",
      "Ca să faci un climat de măiestrie există un model practic, TARGET, de la Epstein și Ames. Fiecare literă e un buton pe care îl are profesorul în mână. T, de la Task, sarcina: sarcini variate, cu dificultate adaptată, ca fiecare să aibă ceva de câștigat. A, de la Authority, autoritate: elevii au un cuvânt de spus, pot alege între variante. R, de la Recognition, recunoaștere: recunoaștem progresul și efortul, de preferat în privat, nu doar pe cei mai buni în fața tuturor. G, de la Grouping, grupare: grupuri mixte, schimbate des, nu „cei buni” și „cei slabi”. E, de la Evaluation, evaluare: raportată la propriul progres, nu la clasament. T, de la Time, timp: timp suficient pentru a învăța, fără grabă. Un profesor care trece prin cele șase litere când își pregătește ora face, aproape fără să vrea, o atmosferă în care elevii vin cu plăcere.",
      "Ce vreau să rămână din partea asta: motivația elevului nu e ceva fix. Se face și se strică în fiecare oră, după atmosfera pe care o face profesorul. Colega mea o să arate acum ce face concret profesorul ca să o construiască."
    ]
  },
  {
    nr: 4,
    titlu: "Tehnici motivaționale de predare",
    cine: "Membrul 4",
    durata: "7-8 minute",
    slides: [
      {
        titlu: "Stabilirea obiectivelor",
        puncte: [
          "Obiective concrete, pe care le poți număra, nu „fă tot ce poți”",
          "Pe termen scurt (ora de azi), mediu (luna), lung (semestrul)",
          "Greutate potrivită: puțin peste ce poate acum",
          "Elevul își pune singur o parte din obiective"
        ],
        vizual: "obiective"
      },
      {
        titlu: "Feedbackul și recunoașterea",
        puncte: [
          "Pe loc, concret, despre ce a făcut: „genunchii mai sus”, nu „mai bine”",
          "Efort și progres, nu talent: „se vede că ai exersat”",
          "Trei la unu: trei lucruri bune la unul de corectat",
          "Recompensele: rar, pentru progres, nu pentru locul întâi"
        ],
        vizual: "feedback"
      },
      {
        titlu: "Autonomie, varietate și joc",
        puncte: [
          "Dă de ales: între două exerciții, ordinea stațiilor, partenerul",
          "Variază: altă structură a orei, alt joc, altă muzică",
          "Jocul: cel mai puternic motor, la toate vârstele",
          "Învățarea prin descoperire: îl lași pe elev să găsească soluția"
        ],
        vizual: "trei"
      },
      {
        titlu: "Profesorul ca model și climatul emoțional",
        puncte: [
          "Entuziasmul profesorului se ia, la fel și plictiseala",
          "O glumă, nume spuse, un cuvânt pentru fiecare: elevul se simte al grupului",
          "Greșeala e normală, face parte din învățat, nu e motiv de rușine",
          "Nu faci pe nimeni de râs, nu compari în fața clasei"
        ],
        vizual: "model"
      },
      {
        titlu: "Studiu de caz: elevul care „nu vrea”",
        puncte: [
          "Andrei, 14 ani, refuză să participe, stă pe margine, „nu-mi place sportul”",
          "Ce aflăm: a greșit de multe ori în fața tuturor, nu mai crede că poate, îi e frică să nu râdă lumea",
          "Ce facem: sarcini la care sigur reușește, rol în echipă (arbitru, apoi jucător), laudă pe efort, fără expunere în fața clasei",
          "După 6 săptămâni: vine la toate orele, propune el jocuri"
        ],
        vizual: "caz"
      }
    ],
    text: [
      "Mulțumesc. Am ajuns la partea cea mai practică: ce face profesorul, concret, ca să motiveze. Prezint cinci lucruri și apoi un caz real. Toate vin din teoriile prezentate de colegii mei și spun la fiecare de unde vine.",
      "Primul lucru e stabilirea obiectivelor. Locke și Latham au arătat că un obiectiv concret, pe care îl poți număra, dă rezultate mult mai bune decât un „fă tot ce poți”. „Săptămâna asta vreau să faci zece flotări corecte” funcționează. „Încearcă mai mult” nu. Obiectivele trebuie să fie și pe azi, și pe luna asta, și pe semestru, ca elevul să vadă legătura dintre ce face azi și ce iese mâine. Greutatea trebuie să fie potrivită: puțin peste ce poate acum, nici prea ușor să se plictisească, nici prea greu să se lase. Vă amintiți de legea optimului și de încrederea despre care vorbea Bandura. Și foarte important: elevul își pune singur o parte din obiective. Asta e nevoia de a alege de la Deci și Ryan, iar un obiectiv pe care l-ai ales tu îl aperi altfel.",
      "Al doilea lucru e feedbackul, adică ce îi spui elevului după ce a făcut ceva. Feedbackul bun e pe loc, concret și despre ce a făcut, nu despre el ca om. „Genunchii mai sus la săritură” este un feedback. „Mai bine” nu este. Apoi, lăudăm efortul și progresul, nu talentul: „se vede că ai exersat” în loc de „ești talentat”. Carol Dweck a arătat că elevii lăudați pentru talent devin fricoși, pentru că orice greșeală le strică eticheta, iar cei lăudați pentru efort caută lucruri mai grele. E exact teoria atribuirii, pusă în practică. O regulă bună e trei la unu: trei lucruri bune la unul de corectat. Corectatul trebuie să existe, altfel lauda nu mai valorează nimic, dar se aude mai bine după ce ai spus și ce a fost bine. Cât despre recompense, puncte, diplome, premii: rar, pentru progres, nu pentru locul întâi, altfel le omorâm cheful celor care nu ajung niciodată primii.",
      "Al treilea lucru: libertatea de a alege, varietatea și jocul. Libertatea înseamnă să le dai de ales, chiar lucruri mici: între două exerciții, în ce ordine parcurg stațiile, cu cine fac pereche. Nu te costă nimic și schimbă mult cât se bagă elevul. Varietatea: altă ordine a orei, alt joc, altă muzică la încălzire. Monotonia omoară motivația mai sigur decât orice. Jocul e cel mai puternic motor, la toate vârstele, nu doar la cei mici. Un exercițiu de viteză plictisitor devine interesant când e un joc de prins. Iar învățarea prin descoperire, una dintre metodele din programa cursului, înseamnă să-l lași pe elev să găsească el soluția: „cum ai putea să arunci mai departe?”, în loc să-i spui tu de la început cum se face. Ce descoperi singur ții minte mai mult.",
      "Al patrulea lucru e profesorul însuși, ca exemplu, și atmosfera pe care o face. Entuziasmul profesorului se ia. Din păcate și plictiseala lui. Elevii simt imediat dacă profesorului îi place ce face. Apoi lucrurile mici care îl fac pe elev să se simtă al grupului: o glumă, să-i spui pe nume, un cuvânt pentru fiecare, nu doar pentru cei buni. Și o regulă: greșeala e normală, face parte din învățat, nu e motiv de rușine. Adică fără să faci pe cineva de râs și fără comparații în fața clasei. Un singur moment de râs în fața clasei poate strica luni de muncă. Aici suntem pe treptele de siguranță și de apartenență din piramida lui Maslow.",
      "Să vedem cum se leagă totul într-un studiu de caz, care e și una dintre metodele cursului. Andrei, 14 ani, clasa a opta. Nu vrea să facă sport, stă pe margine, zice că „nu-i place sportul”, aduce scutiri. Un profesor de modă veche i-ar scădea nota. Să încercăm altfel. Ce aflăm, cu ce am învățat: Andrei a greșit de multe ori în fața tuturor, a fost ales ultimul în echipă, au râs de el când a ratat. Nu mai are nicio încredere că poate, dă vina pe „n-am talent” și îi e tare frică să nu râdă lumea de el. Nu-i lipsește motivația. Are o motivație foarte puternică de a se feri, ceea ce e altceva. Ce facem, în șase săptămâni. Unu: sarcini la care sigur reușește, singur la început, fără privitori. Doi: un rol în echipă care nu-l pune în față, arbitru sau cronometror, ca să fie în grup fără să-l judece nimeni, și abia apoi, încet, jucător. Trei: îi spui doar despre efort și progres, și doar între patru ochi. Patru: zero expunere în fața clasei, echipele le face profesorul, nu le aleg elevii. Rezultatul: după șase săptămâni Andrei vine la toate orele, iar în săptămâna a șasea a propus el un joc pentru clasă. Nu l-a făcut nimeni sportiv. L-a adus cineva înapoi în zona în care mișcarea e sigură și plăcută, atât.",
      "Lucrurile astea nu sunt trucuri. Fiecare vine dintr-o teorie: obiectivele din Locke și Bandura, feedbackul din Skinner și Weiner, libertatea de a alege din Deci și Ryan, atmosfera din Maslow și din TARGET. Un profesor care le știe nu mai trebuie să împingă elevii de la spate. Face condițiile și elevii se motivează singuri. Și pentru că teoria se prinde mai bine când o faci, vă invităm acum la o activitate."
    ]
  }
];

const JOC = {
  titlu: "Activitate practică: Cursa motivației",
  durata: "10-15 minute",
  descriere: "Un circuit cu patru stații, în care fiecare stație ilustrează o tehnică motivațională. Așa se vede cu ochii, nu doar se aude.",
  materiale: "4 conuri sau markere pentru stații, un cronometru, 8-12 cartonașe cu afirmații, o foaie și un pix pentru fiecare echipă",
  organizare: "Grupa se împarte în 2-3 echipe de 4-6 persoane. Fiecare echipă pornește de la altă stație și le parcurge pe toate, 2-3 minute la fiecare. Un membru al grupului de proiect coordonează fiecare stație.",
  statii: [
    {
      nume: "Stația 1: Obiectivul meu",
      tehnica: "Stabilirea obiectivelor și autonomia",
      desfasurare: "Fiecare participant își alege singur un obiectiv de 60 de secunde (număr de genuflexiuni, sărituri, pase la perete) și îl scrie pe foaie. Apoi îl execută. Comparația e doar cu propriul obiectiv, nu cu colegii.",
      intrebare: "Ce a fost diferit când ai ales tu cifra, față de când ți-o impune cineva?"
    },
    {
      nume: "Stația 2: Trei la unu",
      tehnica: "Feedbackul pe efort",
      desfasurare: "În perechi: unul execută un exercițiu simplu (de exemplu aruncare la țintă de 5 ori), celălalt trebuie să dea trei observații pozitive concrete și una de corecție, apoi se schimbă rolurile. Interzis: „bravo” și „mai bine” fără detalii.",
      intrebare: "A fost greu să găsești trei lucruri concrete bune? Cum te-ai simțit când le-ai auzit?"
    },
    {
      nume: "Stația 3: Adevărat sau fals, în mișcare",
      tehnica: "Jocul și învățarea prin descoperire",
      desfasurare: "Coordonatorul citește afirmații din prezentare („Motivația extrinsecă este dăunătoare”, „Lauda talentului crește perseverența”, „Sarcinile complexe cer motivație moderată”). Participanții aleargă la conul din stânga pentru adevărat, din dreapta pentru fals. Cine greșește explică de ce a crezut așa, grupul corectează.",
      intrebare: "Cât din teorie ți-ai amintit când a trebuit să alergi?"
    },
    {
      nume: "Stația 4: Piramida vie",
      tehnica: "Maslow și climatul de siguranță",
      desfasurare: "Echipa primește cartonașe cu situații din sala de sport („un elev e luat în râs când ratează”, „profesorul știe numele tuturor”, „sala e rece și nu au apă”, „elevul primește diplomă pentru progres”) și trebuie să le așeze pe treapta corectă a piramidei lui Maslow, desenată pe jos cu conuri. Discuție: ce trebuie rezolvat întâi.",
      intrebare: "Ce situație ți s-a părut cea mai des întâlnită în școală?"
    }
  ],
  incheiere: "Toate echipele se adună. Fiecare echipă spune într-o propoziție ce tehnică i-a plăcut cel mai mult și de ce. Coordonatorul leagă răspunsurile de teoriile din prezentare."
};

const BIBLIOGRAFIE = [
  "Ames, C. (1992). Classrooms: Goals, structures, and student motivation. Journal of Educational Psychology, 84(3), 261-271.",
  "Bandura, A. (1997). Self-Efficacy: The Exercise of Control. New York: W. H. Freeman.",
  "Cosmovici, A., Iacob, L. (coord.) (1999). Psihologie școlară. Iași: Polirom.",
  "Deci, E. L., Ryan, R. M. (1985). Intrinsic Motivation and Self-Determination in Human Behavior. New York: Plenum Press.",
  "Deci, E. L., Ryan, R. M. (2000). The „what” and „why” of goal pursuits: Human needs and the self-determination of behavior. Psychological Inquiry, 11(4), 227-268.",
  "Duda, J. L. (2001). Achievement goal research in sport: Pushing the boundaries and clarifying some misunderstandings. În G. C. Roberts (ed.), Advances in Motivation in Sport and Exercise. Champaign, IL: Human Kinetics.",
  "Dweck, C. S. (2006). Mindset: The New Psychology of Success. New York: Random House.",
  "Epstein, J. (1989). Family structures and student motivation: A developmental perspective. În C. Ames, R. Ames (eds.), Research on Motivation in Education, vol. 3. San Diego: Academic Press.",
  "Epuran, M., Holdevici, I., Tonița, F. (2001). Psihologia sportului de performanță. Teorie și practică. București: FEST.",
  "Golu, M. (2005). Fundamentele psihologiei, vol. II. București: Editura Fundației România de Mâine.",
  "Locke, E. A., Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation. American Psychologist, 57(9), 705-717.",
  "Maslow, A. H. (1954). Motivation and Personality. New York: Harper & Row.",
  "Neacșu, I. (1978). Motivație și învățare. București: Editura Didactică și Pedagogică.",
  "Pintrich, P. R., Schunk, D. H. (2002). Motivation in Education: Theory, Research, and Applications (ed. a 2-a). Upper Saddle River, NJ: Merrill Prentice Hall.",
  "Weiner, B. (1985). An attributional theory of achievement motivation and emotion. Psychological Review, 92(4), 548-573.",
  "Yerkes, R. M., Dodson, J. D. (1908). The relation of strength of stimulus to rapidity of habit-formation. Journal of Comparative Neurology and Psychology, 18, 459-482.",
  "Zlate, M. (2000). Fundamentele psihologiei. București: Pro Humanitate."
];

module.exports = { TITLU, SUBTITLU, FACULTATE, FAC2, GRUPA, MEMBRI, PARTI, JOC, BIBLIOGRAFIE };
