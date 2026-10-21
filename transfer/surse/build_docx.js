const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, LevelFormat, PageBreak, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle } = require("docx");
const C0 = require("./continut.js");

const NAVY = "2F3C7E", CORAL = "F96167", GRAY = "6B7280";
const P = (text, opts = {}) => new Paragraph(Object.assign({ children: [new TextRun({ text, size: 24, font: "Calibri" })], spacing: { after: 160, line: 320 } }, opts));
const H1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: t, color: NAVY, font: "Cambria", bold: true, size: 36 })], spacing: { before: 360, after: 200 } });
const H2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: t, color: NAVY, font: "Cambria", bold: true, size: 28 })], spacing: { before: 280, after: 140 } });
const B = (t) => new Paragraph({ numbering: { reference: "bul", level: 0 }, children: [new TextRun({ text: t, size: 24, font: "Calibri" })], spacing: { after: 80 } });
const Note = (t) => new Paragraph({ children: [new TextRun({ text: t, size: 22, font: "Calibri", italics: true, color: GRAY })], spacing: { after: 160 } });
const br = () => new Paragraph({ children: [new PageBreak()] });

const kids = [];
// Pagina de titlu
kids.push(new Paragraph({ children: [new TextRun({ text: C0.FACULTATE, size: 22, font: "Calibri", color: GRAY })], alignment: AlignmentType.CENTER, spacing: { after: 60 } }));
kids.push(new Paragraph({ children: [new TextRun({ text: C0.FAC2, size: 22, font: "Calibri", color: GRAY })], alignment: AlignmentType.CENTER, spacing: { after: 1800 } }));
kids.push(new Paragraph({ children: [new TextRun({ text: C0.TITLU, size: 52, font: "Cambria", bold: true, color: NAVY })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }));
kids.push(new Paragraph({ children: [new TextRun({ text: C0.SUBTITLU, size: 26, font: "Calibri", color: "1F2A44" })], alignment: AlignmentType.CENTER, spacing: { after: 1400 } }));
kids.push(new Paragraph({ children: [new TextRun({ text: "Proiect de grup · Pedagogie", size: 24, font: "Calibri", bold: true, color: CORAL })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }));
kids.push(new Paragraph({ children: [new TextRun({ text: "Membrii echipei:", size: 24, font: "Calibri", bold: true })], alignment: AlignmentType.CENTER, spacing: { after: 120 } }));
C0.MEMBRI.forEach(m => kids.push(new Paragraph({ children: [new TextRun({ text: m, size: 24, font: "Calibri" })], alignment: AlignmentType.CENTER, spacing: { after: 80 } })));
kids.push(new Paragraph({ children: [new TextRun({ text: C0.GRUPA + " · Anul I · 2026", size: 22, font: "Calibri", color: GRAY })], alignment: AlignmentType.CENTER, spacing: { before: 1200 } }));
kids.push(br());

// Ghid de folosire
kids.push(H1("Cum folosiți acest material"));
kids.push(P("Documentul conține tot ce trebuie spus la prezentare, împărțit pe patru membri, plus activitatea practică de la final și bibliografia. Fiecare parte are un text de vorbit de 6-7 minute citit în ritm normal; cu pauzele pe slide-uri și cu întrebările, iese 7-8 minute de persoană, deci peste 30 de minute în total, înainte de joc."));
kids.push(B("Textul nu trebuie învățat pe de rost. Citiți-l de două-trei ori și păstrați ideile. La prezentare vorbiți liber, cu slide-ul în față."));
kids.push(B("În PowerPoint, fiecare slide are textul corespunzător în zona de note (View → Notes), ca să-l aveți și acolo."));
kids.push(B("Pe primul slide și pe prima pagină de aici completați numele membrilor. Dacă sunteți mai mulți sau mai puțini de patru, părțile se pot împărți altfel: partea 2 și partea 4 sunt cele mai lungi și se pot tăia în două."));
kids.push(B("Fiecare vorbitor începe cu „Mulțumesc” și o propoziție de legătură cu partea anterioară, apoi predă cuvântul la final. Legăturile sunt deja scrise în text."));
kids.push(B("Activitatea practică are nevoie de 4 conuri, un cronometru și cartonașe pregătite de acasă (lista mai jos). Se face ideal în sala de sport sau într-o sală cu spațiu liber."));

kids.push(H2("Cerințele proiectului"));
["Proiect de grup, fiecare membru participă la prezentare", "Prezentarea verbală durează minimum 30 de minute", "La sfârșit, o activitate sau un joc legat de temă", "Numele participanților la început, bibliografia la sfârșit", "Metode din programă: exercițiul, învățarea prin descoperire, studiul de caz (toate trei sunt folosite: exercițiul în joc, descoperirea la stația 3, studiul de caz în partea 4)"].forEach(t => kids.push(B(t)));

kids.push(H2("Structura și timpii"));
const rows = C0.PARTI.map(p => [String(p.nr), p.titlu, p.cine, p.durata]).concat([["5", C0.JOC.titlu, "Toată echipa", C0.JOC.durata], ["", "Concluzii și bibliografie", "Oricare membru", "2 minute"]]);
const cw = [700, 5200, 1800, 1660];
const cell = (t, w, head = false) => new TableCell({ width: { size: w, type: WidthType.DXA }, shading: head ? { type: ShadingType.CLEAR, fill: NAVY, color: "auto" } : undefined, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: t, size: 22, font: "Calibri", bold: head, color: head ? "FFFFFF" : "1F2A44" })] })] });
kids.push(new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: cw, rows: [new TableRow({ tableHeader: true, children: ["#", "Partea", "Cine", "Durată"].map((t, i) => cell(t, cw[i], true)) })].concat(rows.map(r => new TableRow({ children: r.map((t, i) => cell(t, cw[i])) }))) }));
kids.push(br());

// Partile
C0.PARTI.forEach(p => {
  kids.push(H1("Partea " + p.nr + ": " + p.titlu));
  kids.push(Note(p.cine + " · " + p.durata + " · slide-urile: " + p.slides.map(s => "„" + s.titlu + "”").join(", ")));
  kids.push(H2("Ce apare pe slide-uri"));
  p.slides.forEach(s => {
    kids.push(new Paragraph({ children: [new TextRun({ text: s.titlu, size: 24, font: "Calibri", bold: true, color: NAVY })], spacing: { before: 120, after: 60 } }));
    s.puncte.forEach(pt => kids.push(B(pt)));
  });
  kids.push(H2("Textul de vorbit"));
  p.text.forEach(t => kids.push(P(t)));
  kids.push(br());
});

// Jocul
kids.push(H1(C0.JOC.titlu));
kids.push(Note("Toată echipa · " + C0.JOC.durata));
kids.push(P(C0.JOC.descriere));
kids.push(H2("Materiale"));
kids.push(P(C0.JOC.materiale + "."));
kids.push(H2("Organizare"));
kids.push(P(C0.JOC.organizare));
kids.push(H2("Stațiile"));
C0.JOC.statii.forEach(st => {
  kids.push(new Paragraph({ children: [new TextRun({ text: st.nume, size: 26, font: "Calibri", bold: true, color: CORAL })], spacing: { before: 200, after: 60 } }));
  kids.push(Note("Tehnica ilustrată: " + st.tehnica));
  kids.push(P(st.desfasurare));
  kids.push(P("Întrebare de reflecție la final de stație: " + st.intrebare));
});
kids.push(H2("Cartonașe de pregătit acasă"));
kids.push(new Paragraph({ children: [new TextRun({ text: "Stația 3, adevărat sau fals (răspunsul în paranteză):", size: 24, font: "Calibri", bold: true })], spacing: { after: 80 } }));
["Motivația extrinsecă este întotdeauna dăunătoare. (FALS: coexistă cu cea intrinsecă și e deseori motorul de pornire)", "Lauda talentului crește perseverența. (FALS: lauda efortului o crește; lauda talentului crește teama de eșec)", "Sarcinile complexe cer o motivație moderată. (ADEVĂRAT: legea Yerkes-Dodson)", "Un elev speriat de ridicol nu este disponibil pentru învățare. (ADEVĂRAT: nevoia de siguranță, Maslow)", "Climatul de ego motivează pe toți elevii. (FALS: doar pe cei care câștigă mereu)", "Cea mai puternică sursă a autoeficacității este încurajarea verbală. (FALS: experiența proprie a reușitei)", "Obiectivul „fă tot ce poți” este mai eficient decât unul concret. (FALS)", "Cele trei nevoi din teoria autodeterminării sunt autonomia, competența și relaționarea. (ADEVĂRAT)"].forEach(t => kids.push(B(t)));
kids.push(new Paragraph({ children: [new TextRun({ text: "Stația 4, situații pentru piramida lui Maslow (treapta corectă în paranteză):", size: 24, font: "Calibri", bold: true })], spacing: { before: 160, after: 80 } }));
["Sala e rece și elevii nu au apă. (fiziologice)", "Un elev e luat în râs când ratează. (siguranță)", "Elevul nu e ales niciodată în echipă. (apartenență)", "Profesorul știe numele tuturor și le folosește. (apartenență)", "Elevul primește diplomă pentru progres. (stimă)", "Elevul propune el un joc nou pentru clasă. (autorealizare)", "Elevul vine la oră nedormit după o noapte de muncă. (fiziologice)", "Elevul se teme că va fi pedepsit dacă greșește. (siguranță)"].forEach(t => kids.push(B(t)));
kids.push(H2("Încheierea activității"));
kids.push(P(C0.JOC.incheiere));
kids.push(br());

// Bibliografie
kids.push(H1("Bibliografie"));
C0.BIBLIOGRAFIE.forEach(b => kids.push(new Paragraph({ children: [new TextRun({ text: b, size: 22, font: "Calibri" })], spacing: { after: 120 }, indent: { left: 567, hanging: 567 } })));

const doc = new Document({
  creator: "Grupa 5104 SPM", title: C0.TITLU,
  styles: { default: { document: { run: { font: "Calibri", size: 24 } } } },
  numbering: { config: [{ reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 567, hanging: 283 } } } }] }] },
  sections: [{ properties: { page: { margin: { top: 1134, bottom: 1134, left: 1247, right: 1247 } } }, children: kids }]
});
const out = path.join(__dirname, "Motivatia_Text_de_prezentare_Grupa5104.docx");
Packer.toBuffer(doc).then(buf => { fs.writeFileSync(out, buf); console.log("OK", out); });
