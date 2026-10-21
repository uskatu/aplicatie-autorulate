const pptxgen = require("pptxgenjs");
const path = require("path");
const { applyTheme } = require("/mnt/skills/public/pptx/scripts/apply_theme.js");
const C0 = require("./continut.js");

// Paleta: verde de teren + alb + galben de linie de teren
const G1 = "1E5B2A", G2 = "2E7D32", G3 = "A5D6A7", LIME = "F2E94E", INK = "222222", GRAY = "6D6D6D", LINE = "D9D9D9", PALE = "F1F7F1";
const THEME = {
  name: "Teren",
  headFontFace: "Arial",
  bodyFontFace: "Calibri",
  colors: { dk1: INK, lt1: "FFFFFF", dk2: G1, lt2: PALE, accent1: G2, accent2: LIME, accent3: G3, accent4: GRAY, accent5: "E8F5E9", accent6: LINE, hlink: G2, folHlink: GRAY }
};

(async () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.author = "Grupa 5104 SPM";
  pres.title = C0.TITLU;

  pres.defineSlideMaster({
    title: "TITLE", background: { color: "FFFFFF" },
    objects: [
      { rect: { x: 0, y: 0, w: 6.9, h: 7.5, fill: { color: G1 } } },
      { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 1.6, w: 5.8, h: 3.2, fontSize: 36, bold: true, color: "FFFFFF", align: "left", valign: "middle", margin: 0 } } },
      { placeholder: { options: { name: "body", type: "body", x: 0.6, y: 5.0, w: 5.8, h: 1.8, fontSize: 13, color: G3, align: "left", valign: "top", margin: 0 } } },
    ]
  });
  pres.defineSlideMaster({
    title: "SECTION", background: { color: G1 },
    objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.8, y: 2.2, w: 9.5, h: 2.2, fontSize: 36, bold: true, color: "FFFFFF", align: "left", valign: "middle", margin: 0 } } },
      { placeholder: { options: { name: "body", type: "body", x: 0.8, y: 4.5, w: 9.5, h: 0.8, fontSize: 18, color: LIME, align: "left", valign: "top", margin: 0 } } },
    ]
  });
  pres.defineSlideMaster({
    title: "CONTENT", background: { color: "FFFFFF" },
    objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.7, y: 0.45, w: 11.9, h: 0.9, fontSize: 30, bold: true, color: G1, align: "left", valign: "middle", margin: 0 } } },
      { line: { x: 0.7, y: 7.0, w: 11.9, h: 0, line: { color: LINE, width: 0.75 } } },
      { text: { text: "Motivația și rolul ei în activitatea umană  ·  Grupa 5104 SPM", options: { x: 0.7, y: 7.05, w: 9, h: 0.3, fontSize: 9, color: GRAY, margin: 0 } } },
    ],
    slideNumber: { x: 12.1, y: 7.05, w: 0.5, h: 0.3, fontSize: 9, color: GRAY, align: "right" }
  });

  const notes = (slide, parts) => slide.addNotes(parts.join("\n\n"));
  const T = (slide, text, o) => slide.addText(text, Object.assign({ fontSize: 13, color: INK, margin: 0, isTextBox: true, objectName: (typeof text === "string" ? text : "text").slice(0, 25) }, o));

  // ---------- Titlu ----------
  pres.addSection({ title: "Introducere" });
  let s = pres.addSlide({ masterName: "TITLE", sectionTitle: "Introducere" });
  T(s, "PROIECT DE GRUP  ·  PEDAGOGIE", { x: 0.6, y: 0.7, w: 5.8, h: 0.4, fontSize: 11, bold: true, color: LIME, charSpacing: 3 });
  s.addText(C0.TITLU, { placeholder: "title" });
  s.addText(C0.SUBTITLU, { placeholder: "body" });
  T(s, C0.FACULTATE, { x: 7.4, y: 0.9, w: 5.4, h: 0.4, fontSize: 12, color: GRAY });
  T(s, C0.FAC2, { x: 7.4, y: 1.25, w: 5.4, h: 0.6, fontSize: 12, color: GRAY });
  T(s, C0.GRUPA + "  ·  Anul I  ·  2026", { x: 7.4, y: 1.95, w: 5.4, h: 0.4, fontSize: 12, color: GRAY });
  T(s, "Membrii echipei", { x: 7.4, y: 3.1, w: 5.4, h: 0.5, fontSize: 20, bold: true, color: G1 });
  s.addShape(pres.ShapeType.line, { x: 7.4, y: 3.65, w: 5.4, h: 0, line: { color: G2, width: 2 }, objectName: "Linie membri" });
  C0.MEMBRI.forEach((m, i) => T(s, m, { x: 7.4, y: 3.85 + i * 0.6, w: 5.4, h: 0.5, fontSize: 16, color: INK }));
  notes(s, ["Slide de titlu. Completați numele membrilor în dreapta (înlocuiți liniile). Primul vorbitor se prezintă, prezintă echipa și spune în două propoziții ce urmează: patru părți și o activitate practică la final."]);

  // ---------- Cuprins ----------
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Introducere" });
  s.addText("Structura prezentării", { placeholder: "title" });
  const rows = [[{ text: "", options: { fill: { color: G1 } } }, { text: "Partea", options: { bold: true, color: "FFFFFF", fill: { color: G1 } } }, { text: "Cine", options: { bold: true, color: "FFFFFF", fill: { color: G1 } } }, { text: "Durată", options: { bold: true, color: "FFFFFF", fill: { color: G1 } } }]];
  C0.PARTI.forEach(p => rows.push([String(p.nr), p.titlu, p.cine, p.durata]));
  rows.push(["5", C0.JOC.titlu, "Toată echipa, împreună cu grupa", C0.JOC.durata]);
  rows.push(["", "Concluzii și bibliografie", "Oricare membru", "2 minute"]);
  s.addTable(rows, { x: 0.7, y: 1.7, w: 11.9, colW: [0.7, 6.6, 2.9, 1.7], fontSize: 14, fontFace: "Calibri", color: INK, border: { type: "solid", color: LINE, pt: 0.75 }, rowH: 0.62, valign: "middle", margin: 0.08, objectName: "Tabel cuprins" });
  T(s, "În total: peste 30 de minute de prezentare vorbită, apoi activitatea practică cu toată grupa.", { x: 0.7, y: 6.1, w: 11.9, h: 0.5, fontSize: 13, italic: true, color: GRAY });
  notes(s, ["Prezentați pe scurt structura: patru părți teoretice, fiecare susținută de un membru, apoi activitatea practică la care participă toată grupa. Spuneți că la final este bibliografia. Nu intrați în conținut aici, maximum un minut."]);

  // ---------- Vizualuri ----------
  const VX = 7.7, VY = 1.75, VW = 4.9, VH = 4.9;
  const box = (slide, x, y, w, h, fill, line, name) => slide.addShape(pres.ShapeType.rect, { x, y, w, h, fill: { color: fill }, line: { color: line || fill, width: 1 }, objectName: name });
  function visual(slide, kind, sl) {
    switch (kind) {
      case "definitie": {
        T(slide, "ne pornește", { x: VX, y: VY + 0.4, w: VW, h: 0.9, fontSize: 30, bold: true, color: G1 });
        T(slide, "ne arată încotro", { x: VX, y: VY + 1.6, w: VW, h: 0.9, fontSize: 30, bold: true, color: G2 });
        T(slide, "ne ține pe drum", { x: VX, y: VY + 2.8, w: VW, h: 0.9, fontSize: 30, bold: true, color: G1 });
        slide.addShape(pres.ShapeType.line, { x: VX, y: VY + 4.0, w: 2.5, h: 0, line: { color: LIME, width: 4 }, objectName: "Linie galbena" });
        T(slide, "răspunde la „de ce”, nu la „cum”", { x: VX, y: VY + 4.2, w: VW, h: 0.5, fontSize: 13, italic: true, color: GRAY });
        break;
      }
      case "scara": {
        const items = ["Trebuințe", "Motive", "Interese", "Convingeri", "Idealuri"];
        items.forEach((t, i) => {
          const w = 1.9 + i * 0.7, y = VY + VH - 0.2 - (i + 1) * 0.9;
          box(slide, VX, y, w, 0.8, i === 4 ? G1 : (i >= 2 ? G2 : G3), "FFFFFF", "Treapta " + t);
          T(slide, t, { x: VX + 0.15, y, w: w - 0.2, h: 0.8, fontSize: 14, bold: true, color: i >= 2 ? "FFFFFF" : INK, valign: "middle" });
        });
        T(slide, "de jos în sus: de la nevoi simple la cele mari", { x: VX, y: VY + VH - 0.1, w: VW, h: 0.35, fontSize: 11, italic: true, color: GRAY });
        break;
      }
      case "patru": {
        const names = sl.puncte.map(x => x.split(":")[0]);
        for (let i = 0; i < 4; i++) {
          const x = VX + (i % 2) * 2.55, y = VY + 0.2 + Math.floor(i / 2) * 2.3;
          box(slide, x, y, 2.35, 2.0, i % 3 === 0 ? G1 : PALE, i % 3 === 0 ? G1 : G3, "Caseta " + names[i]);
          T(slide, String(i + 1), { x: x + 0.2, y: y + 0.15, w: 1, h: 0.8, fontSize: 36, bold: true, color: i % 3 === 0 ? LIME : G2 });
          T(slide, names[i], { x: x + 0.2, y: y + 1.1, w: 2.0, h: 0.7, fontSize: 16, bold: true, color: i % 3 === 0 ? "FFFFFF" : G1 });
        }
        break;
      }
      case "doua": {
        const mot = sl.titlu.startsWith("Motiva");
        const hdr = mot ? ["", "Din interior", "Din exterior"] : ["", "Măiestrie", "Ego"];
        const body = mot
          ? [["Unde e răsplata", "în lucrul în sine", "în afara lui"], ["Exemplu", "joc pentru că îmi place", "joc pentru notă sau medalie"], ["Cât ține", "mult", "cât ține recompensa"], ["Cum se simte", "plăcere, curiozitate", "presiune, așteptare"]]
          : [["Ce e reușita", "am progresat eu", "sunt mai bun ca alții"], ["Cine câștigă", "toți cei care se străduiesc", "doar câțiva, mereu aceiași"], ["Ce simt elevii", "plăcere, mai puține emoții", "frică de a pierde"], ["Ce fac restul", "continuă", "se feresc de activitate"]];
        const rows = [hdr.map((h, i) => ({ text: h, options: { bold: true, color: "FFFFFF", fill: { color: i === 0 ? G1 : (i === 1 ? G2 : GRAY) } } }))].concat(body.map(r => r.map((c, i) => ({ text: c, options: { bold: i === 0, fill: { color: i === 0 ? PALE : "FFFFFF" } } }))));
        slide.addTable(rows, { x: VX, y: VY + 0.2, w: VW, colW: [1.4, 1.75, 1.75], fontSize: 12, fontFace: "Calibri", color: INK, border: { type: "solid", color: LINE, pt: 0.75 }, rowH: 0.75, valign: "middle", margin: 0.06, objectName: "Tabel comparatie" });
        break;
      }
      case "curba": {
        const xs = [], ys = [];
        for (let i = 0; i <= 10; i++) { xs.push(i); ys.push(Math.round(100 * Math.exp(-((i - 5) ** 2) / 8))); }
        slide.addChart(pres.ChartType.line, [{ name: "Rezultate", labels: xs.map(x => x === 0 ? "puțină" : x === 5 ? "potrivită" : x === 10 ? "prea multă" : " "), values: ys }],
          { x: VX, y: VY, w: VW, h: VH - 0.3, chartColors: [G2], lineSize: 3, lineDataSymbol: "none", showLegend: false,
            showTitle: true, title: "Yerkes și Dodson, 1908", titleFontSize: 12, titleColor: GRAY, titleFontFace: "+mn-lt",
            catAxisLabelColor: INK, catAxisLabelFontSize: 11, catAxisLabelRotate: 0, catAxisLabelFontFace: "+mn-lt", catAxisTitle: "motivația", showCatAxisTitle: true, catAxisTitleColor: GRAY, catAxisTitleFontSize: 11, catAxisTitleFontFace: "+mn-lt",
            valAxisLabelColor: GRAY, valAxisLabelFontSize: 10, valAxisLabelFontFace: "+mn-lt", valAxisTitle: "rezultatele", showValAxisTitle: true, valAxisTitleColor: GRAY, valAxisTitleFontSize: 11, valAxisTitleFontFace: "+mn-lt", valAxisMaxVal: 110, valAxisMinVal: 0,
            valGridLine: { color: LINE, size: 0.5 }, catGridLine: { style: "none" } });
        break;
      }
      case "cerc": {
        const steps = ["Fac ceva", "Primesc ceva", "Repet"];
        const pos = [[VX + 1.65, VY + 0.2], [VX + 0.2, VY + 2.8], [VX + 3.1, VY + 2.8]];
        steps.forEach((t, i) => {
          slide.addShape(pres.ShapeType.ellipse, { x: pos[i][0], y: pos[i][1], w: 1.6, h: 1.6, fill: { color: i === 1 ? LIME : G1 }, line: { color: i === 1 ? LIME : G1 }, objectName: "Pas " + t });
          T(slide, t, { x: pos[i][0], y: pos[i][1], w: 1.6, h: 1.6, fontSize: 14, bold: true, color: i === 1 ? INK : "FFFFFF", align: "center", valign: "middle" });
        });
        slide.addShape(pres.ShapeType.line, { x: VX + 1.3, y: VY + 1.7, w: 0.9, h: 1.1, line: { color: GRAY, width: 2, endArrowType: "triangle" }, flipH: true, objectName: "Sageata 1" });
        slide.addShape(pres.ShapeType.line, { x: VX + 1.85, y: VY + 3.6, w: 1.2, h: 0, line: { color: GRAY, width: 2, endArrowType: "triangle" }, objectName: "Sageata 2" });
        slide.addShape(pres.ShapeType.line, { x: VX + 2.7, y: VY + 1.7, w: 0.9, h: 1.1, line: { color: GRAY, width: 2, endArrowType: "triangle" }, flipV: true, objectName: "Sageata 3" });
        break;
      }
      case "piramida": {
        const lv = ["Autorealizare", "Stimă", "Apartenență", "Siguranță", "Fiziologice"];
        lv.forEach((t, i) => {
          const w = 1.3 + i * 0.85, y = VY + 0.2 + i * 0.92;
          slide.addShape(pres.ShapeType.trapezoid, { x: VX + (VW - w) / 2, y, w, h: 0.86, fill: { color: i === 0 ? LIME : (i < 3 ? G2 : G1) }, line: { color: "FFFFFF", width: 1 }, objectName: "Nivel " + t });
          T(slide, t, { x: VX + (VW - w) / 2, y, w, h: 0.86, fontSize: 12, bold: true, color: i === 0 ? INK : "FFFFFF", align: "center", valign: "middle" });
        });
        break;
      }
      case "atribuire": {
        T(slide, "„Am pierdut pentru că…”", { x: VX, y: VY + 0.2, w: VW, h: 0.5, fontSize: 16, bold: true, color: G1 });
        box(slide, VX, VY + 0.9, VW, 1.7, PALE, G3, "Caseta intern");
        slide.addText([{ text: "…nu m-am antrenat destul", options: { bold: true, breakLine: true, fontSize: 16 } }, { text: "depinde de mine, pot schimba ceva → motivația rămâne", options: { fontSize: 12, color: GRAY } }], { x: VX + 0.2, y: VY + 1.0, w: VW - 0.4, h: 1.5, color: G1, margin: 0, valign: "middle", isTextBox: true, objectName: "Text intern" });
        box(slide, VX, VY + 2.8, VW, 1.7, "FFFFFF", GRAY, "Caseta extern");
        slide.addText([{ text: "…n-am talent / arbitrul", options: { bold: true, breakLine: true, fontSize: 16 } }, { text: "nu depinde de mine, n-am ce face → motivația moare", options: { fontSize: 12, color: GRAY } }], { x: VX + 0.2, y: VY + 2.9, w: VW - 0.4, h: 1.5, color: INK, margin: 0, valign: "middle", isTextBox: true, objectName: "Text extern" });
        break;
      }
      case "trei": {
        const deci = sl.puncte[0].includes("Trei nevoi");
        const names = deci ? [["Autonomie", "să pot alege"], ["Competență", "să mă descurc"], ["Relaționare", "să fiu acceptat"]] : [["Alegere", "între două exerciții, partenerul"], ["Varietate", "alt joc, altă muzică"], ["Joc", "cel mai puternic motor"]];
        names.forEach((n, i) => {
          const y = VY + 0.2 + i * 1.55;
          T(slide, String(i + 1), { x: VX, y, w: 0.9, h: 1.3, fontSize: 48, bold: true, color: G3 });
          T(slide, n[0], { x: VX + 1.0, y: y + 0.15, w: VW - 1, h: 0.6, fontSize: 20, bold: true, color: G1 });
          T(slide, n[1], { x: VX + 1.0, y: y + 0.7, w: VW - 1, h: 0.5, fontSize: 13, color: GRAY });
        });
        break;
      }
      case "surse": {
        slide.addShape(pres.ShapeType.ellipse, { x: VX + 1.55, y: VY + 1.6, w: 1.8, h: 1.8, fill: { color: G1 }, line: { color: G1 }, objectName: "Centru pot" });
        T(slide, "„Pot!”", { x: VX + 1.55, y: VY + 1.6, w: 1.8, h: 1.8, fontSize: 24, bold: true, color: LIME, align: "center", valign: "middle" });
        const src = [["am reușit înainte", true], ["văd pe cineva ca mine", false], ["mă încurajează cineva", false], ["cum mă simt", false]];
        const pos = [[VX, VY + 0.2], [VX + 2.9, VY + 0.2], [VX, VY + 3.8], [VX + 2.9, VY + 3.8]];
        src.forEach((t, i) => {
          box(slide, pos[i][0], pos[i][1], 2.0, 1.0, t[1] ? G2 : PALE, t[1] ? G2 : G3, "Sursa " + i);
          T(slide, t[0], { x: pos[i][0] + 0.1, y: pos[i][1], w: 1.8, h: 1.0, fontSize: 12, bold: true, color: t[1] ? "FFFFFF" : INK, align: "center", valign: "middle" });
        });
        break;
      }
      case "triunghi": {
        slide.addShape(pres.ShapeType.triangle, { x: VX + 0.9, y: VY + 0.9, w: 3.1, h: 2.9, fill: { color: PALE }, line: { color: G2, width: 2 }, objectName: "Triunghi" });
        T(slide, "motivația", { x: VX + 0.9, y: VY + 2.5, w: 3.1, h: 0.5, fontSize: 14, italic: true, color: G2, align: "center" });
        [["Elevul", VX + 1.65, VY + 0.2], ["Profesorul", VX, VY + 3.9], ["Ce e de învățat", VX + 3.0, VY + 3.9]].forEach(([t, x, y]) => {
          box(slide, x, y, 1.9, 0.6, G1, G1, "Varf " + t);
          T(slide, t, { x, y, w: 1.9, h: 0.6, fontSize: 13, bold: true, color: "FFFFFF", align: "center", valign: "middle" });
        });
        break;
      }
      case "sport": {
        T(slide, "„", { x: VX, y: VY, w: 1.5, h: 1.5, fontSize: 96, bold: true, color: G3 });
        T(slide, "În sport motivația se vede. Nu te poți preface că alergi.", { x: VX + 0.2, y: VY + 1.3, w: VW - 0.4, h: 2.2, fontSize: 24, bold: true, color: G1 });
        T(slide, "Mihai Epuran, Psihologia sportului de performanță", { x: VX + 0.2, y: VY + 3.7, w: VW - 0.4, h: 0.6, fontSize: 12, italic: true, color: GRAY });
        break;
      }
      case "target": {
        const L = ["T", "A", "R", "G", "E", "T"], W = ["Task (sarcina)", "Authority (cuvânt de spus)", "Recognition (recunoaștere)", "Grouping (grupare)", "Evaluation (evaluare)", "Time (timp)"];
        for (let i = 0; i < 6; i++) {
          const y = VY + 0.15 + i * 0.78;
          box(slide, VX, y, 0.65, 0.65, G1, G1, "Litera " + i);
          T(slide, L[i], { x: VX, y, w: 0.65, h: 0.65, fontSize: 20, bold: true, color: LIME, align: "center", valign: "middle" });
          T(slide, W[i], { x: VX + 0.85, y, w: VW - 0.85, h: 0.65, fontSize: 14, bold: true, color: INK, valign: "middle" });
        }
        break;
      }
      case "obiective": {
        const rows = [[{ text: "Vag", options: { bold: true, color: "FFFFFF", fill: { color: GRAY } } }, { text: "Concret", options: { bold: true, color: "FFFFFF", fill: { color: G2 } } }],
          ["„fă tot ce poți”", "„10 flotări corecte”"], ["„încearcă mai mult”", "„sub 3 minute la 800 m”"], ["„fii mai atent”", "„3 pase din 5 la țintă”"]];
        slide.addTable(rows, { x: VX, y: VY + 0.2, w: VW, colW: [2.45, 2.45], fontSize: 14, fontFace: "Calibri", color: INK, border: { type: "solid", color: LINE, pt: 0.75 }, rowH: 0.7, valign: "middle", margin: 0.08, objectName: "Tabel obiective" });
        T(slide, "azi · luna asta · semestrul", { x: VX, y: VY + 3.4, w: VW, h: 0.5, fontSize: 16, bold: true, color: G1 });
        T(slide, "Locke și Latham, 2002", { x: VX, y: VY + 3.9, w: VW, h: 0.4, fontSize: 12, italic: true, color: GRAY });
        break;
      }
      case "feedback": {
        T(slide, "3 : 1", { x: VX, y: VY, w: VW, h: 1.5, fontSize: 66, bold: true, color: G2 });
        T(slide, "trei lucruri bune la unul de corectat", { x: VX, y: VY + 1.5, w: VW, h: 0.5, fontSize: 14, color: GRAY });
        box(slide, VX, VY + 2.4, VW, 2.1, G1, G1, "Caseta efort");
        slide.addText([{ text: "„Se vede că ai exersat.”", options: { bold: true, breakLine: true, fontSize: 20, color: "FFFFFF" } }, { text: "lauzi efortul, nu talentul", options: { fontSize: 13, color: LIME } }], { x: VX + 0.25, y: VY + 2.5, w: VW - 0.5, h: 1.9, margin: 0, valign: "middle", isTextBox: true, objectName: "Text efort" });
        break;
      }
      case "model": {
        T(slide, "Entuziasmul se ia.", { x: VX, y: VY + 0.3, w: VW, h: 0.9, fontSize: 28, bold: true, color: G1 });
        T(slide, "Plictiseala la fel.", { x: VX, y: VY + 1.2, w: VW, h: 0.9, fontSize: 28, bold: true, color: GRAY });
        box(slide, VX, VY + 2.6, VW, 1.9, PALE, G3, "Caseta reguli");
        slide.addText([{ text: "nu faci pe nimeni de râs", options: { breakLine: true } }, { text: "nu compari în fața clasei", options: { breakLine: true } }, { text: "greșeala face parte din învățat" }], { x: VX + 0.25, y: VY + 2.7, w: VW - 0.5, h: 1.7, fontSize: 15, bold: true, color: G1, margin: 0, valign: "middle", isTextBox: true, objectName: "Text reguli" });
        break;
      }
      case "caz": {
        const steps = ["Săpt. 1-2: singur, sarcini la care sigur reușește", "Săpt. 3-4: arbitru sau cronometror, apoi jucător", "Săpt. 5-6: laudă pe efort, echipe făcute de profesor", "Rezultat: vine la toate orele, propune el un joc"];
        slide.addShape(pres.ShapeType.line, { x: VX + 0.35, y: VY + 0.5, w: 0, h: 3.7, line: { color: G3, width: 3 }, objectName: "Linie timp" });
        steps.forEach((t, i) => {
          const y = VY + 0.2 + i * 1.2;
          slide.addShape(pres.ShapeType.ellipse, { x: VX, y: y + 0.1, w: 0.7, h: 0.7, fill: { color: i === 3 ? LIME : G1 }, line: { color: i === 3 ? LIME : G1 }, objectName: "Pas caz " + i });
          T(slide, i === 3 ? "✓" : String(i + 1), { x: VX, y: y + 0.1, w: 0.7, h: 0.7, fontSize: 16, bold: true, color: i === 3 ? INK : "FFFFFF", align: "center", valign: "middle" });
          T(slide, t, { x: VX + 0.95, y, w: VW - 0.95, h: 0.95, fontSize: 13, color: INK, valign: "middle" });
        });
        break;
      }
    }
  }

  // ---------- Părți ----------
  for (const p of C0.PARTI) {
    pres.addSection({ title: "Partea " + p.nr });
    s = pres.addSlide({ masterName: "SECTION", sectionTitle: "Partea " + p.nr });
    T(s, "PARTEA " + p.nr, { x: 0.8, y: 1.4, w: 6, h: 0.5, fontSize: 14, color: LIME, bold: true, charSpacing: 4 });
    T(s, String(p.nr), { x: 10.3, y: 1.0, w: 2.5, h: 4.5, fontSize: 220, bold: true, color: G2, align: "right" });
    s.addText(p.titlu, { placeholder: "title" });
    s.addText(p.cine + "  ·  " + p.durata, { placeholder: "body" });
    notes(s, ["Slide de tranziție. " + p.cine + " preia cuvântul.", p.text[0]]);

    for (let i = 0; i < p.slides.length; i++) {
      const sl = p.slides[i];
      s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Partea " + p.nr });
      s.addText(sl.titlu, { placeholder: "title" });
      s.addText(sl.puncte.map((t, k) => ({ text: t, options: { bullet: { indent: 18 }, breakLine: k < sl.puncte.length - 1, paraSpaceAfter: 12 } })),
        { x: 0.7, y: 1.75, w: 6.5, h: 4.9, fontSize: 16, color: INK, valign: "top", margin: 0, isTextBox: true, objectName: "Puncte" });
      visual(s, sl.vizual, sl);
      const para = p.text[Math.min(i + 1, p.text.length - 2)] || "";
      notes(s, [para]);
    }
  }

  // ---------- Joc ----------
  pres.addSection({ title: "Activitate practică" });
  s = pres.addSlide({ masterName: "SECTION", sectionTitle: "Activitate practică" });
  T(s, "ACTIVITATE PRACTICĂ", { x: 0.8, y: 1.4, w: 8, h: 0.5, fontSize: 14, color: LIME, bold: true, charSpacing: 4 });
  s.addText("Cursa motivației", { placeholder: "title" });
  s.addText("Toată grupa  ·  " + C0.JOC.durata + "  ·  circuit cu 4 stații, fiecare o tehnică de motivare", { placeholder: "body" });
  notes(s, [C0.JOC.descriere, "Organizare: " + C0.JOC.organizare, "Materiale: " + C0.JOC.materiale]);

  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Activitate practică" });
  s.addText("Cele patru stații", { placeholder: "title" });
  const jr = [[{ text: "Stația", options: { bold: true, color: "FFFFFF", fill: { color: G1 } } }, { text: "Ce ilustrează", options: { bold: true, color: "FFFFFF", fill: { color: G1 } } }, { text: "Ce se face", options: { bold: true, color: "FFFFFF", fill: { color: G1 } } }]];
  C0.JOC.statii.forEach((st, i) => jr.push([{ text: st.nume.replace("Stația " + (i + 1) + ": ", (i + 1) + ". "), options: { bold: true, color: G1, fill: { color: PALE } } }, st.tehnica, st.desfasurare]));
  s.addTable(jr, { x: 0.7, y: 1.7, w: 11.9, colW: [2.3, 2.4, 7.2], fontSize: 12, fontFace: "Calibri", color: INK, border: { type: "solid", color: LINE, pt: 0.75 }, valign: "middle", margin: 0.08, objectName: "Tabel statii" });
  T(s, "Materiale: " + C0.JOC.materiale + ". Echipe de 4-6, 2-3 minute pe stație, apoi toți împreună.", { x: 0.7, y: 6.35, w: 11.9, h: 0.5, fontSize: 11, italic: true, color: GRAY });
  notes(s, C0.JOC.statii.map(st => st.nume + ". " + st.desfasurare + " Întrebare de reflecție: " + st.intrebare).concat(["Încheiere: " + C0.JOC.incheiere]));

  // ---------- Concluzii ----------
  pres.addSection({ title: "Încheiere" });
  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Încheiere" });
  s.addText("Ce rămâne", { placeholder: "title" });
  const concl = [
    ["Motivația face dintr-un „pot” un „fac”", "fără ea, talentul stă degeaba"],
    ["Fiecare teorie îi dă profesorului câte ceva", "feedback, siguranță, pe cine dai vina, de ales, sarcini crescătoare"],
    ["Atmosfera se face în fiecare oră", "măiestrie, nu ego: modelul TARGET"],
    ["Profesorul nu împinge, face condițiile", "elevii se motivează singuri când pot alege, se descurcă și se simt ai grupului"]
  ];
  concl.forEach((c, i) => {
    const y = 1.75 + i * 1.25;
    T(s, String(i + 1), { x: 0.7, y, w: 1.0, h: 1.0, fontSize: 44, bold: true, color: G3 });
    T(s, c[0], { x: 1.8, y: y + 0.05, w: 10.8, h: 0.5, fontSize: 20, bold: true, color: G1 });
    T(s, c[1], { x: 1.8, y: y + 0.55, w: 10.8, h: 0.45, fontSize: 14, color: GRAY });
    if (i < 3) s.addShape(pres.ShapeType.line, { x: 1.8, y: y + 1.12, w: 10.8, h: 0, line: { color: LINE, width: 0.75 }, objectName: "Separator " + i });
  });
  notes(s, ["Concluzii, 1-2 minute, spuse de oricare membru. Reluați cele patru idei de pe slide cu o propoziție fiecare și mulțumiți pentru atenție. Apoi lăsați slide-ul cu bibliografia afișat."]);

  s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Încheiere" });
  s.addText("Bibliografie", { placeholder: "title" });
  const half = Math.ceil(C0.BIBLIOGRAFIE.length / 2);
  [C0.BIBLIOGRAFIE.slice(0, half), C0.BIBLIOGRAFIE.slice(half)].forEach((col, ci) => {
    s.addText(col.map((b, k) => ({ text: b, options: { bullet: { type: "number", numberStartAt: ci * half + 1, indent: 18 }, breakLine: k < col.length - 1, paraSpaceAfter: 5 } })), { x: 0.7 + ci * 6.1, y: 1.7, w: 5.85, h: 5.2, fontSize: 10, color: INK, valign: "top", margin: 0, isTextBox: true, objectName: "Bibliografie col " + (ci + 1) });
  });
  notes(s, ["Bibliografia rămâne pe ecran la final. Dacă profesorul întreabă, principalele surse românești sunt Neacșu (motivație și învățare), Epuran (psihologia sportului), Cosmovici și Zlate (psihologie generală și școlară)."]);

  const out = path.join(__dirname, "Motivatia_Proiect_Grupa5104.pptx");
  await pres.writeFile({ fileName: out });
  await applyTheme(out, THEME);
  console.log("OK", out);
})();
