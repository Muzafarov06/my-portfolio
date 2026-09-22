// src/utils/exportPdf.js

const PAGE_W = 210;
const PAGE_H = 297;
const M = 16;

function loadImage(url) {
  return new Promise((resolve) => {
    if (!url) return resolve(null);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.filter = 'grayscale(1) contrast(1.05)';
        ctx.drawImage(img, 0, 0);
        resolve({
          dataUrl: canvas.toDataURL('image/jpeg', 0.85),
          w: img.naturalWidth,
          h: img.naturalHeight,
        });
      } catch (e) {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

function fitImage(imgW, imgH, boxW, boxH) {
  const ratio = Math.min(boxW / imgW, boxH / imgH);
  const w = imgW * ratio;
  const h = imgH * ratio;
  return { w, h, x: (boxW - w) / 2, y: (boxH - h) / 2 };
}

export async function exportPortfolioPdf({ photos = [], name, subtitle, skills = [] }) {
  // ✅ jsPDF тянется только в момент вызова — не грузится вместе с сайтом
  const { jsPDF } = await import('jspdf');

  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

  let y = M;

  // ── Имя ──
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(20, 20, 20);
  String(name || '').split('\n').forEach((line) => {
    doc.text(line.toUpperCase(), M, y);
    y += 10;
  });

  y += 2;

  // ── Подзаголовок ──
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(90, 90, 90);
  doc.text(subtitle || '', M, y);

  y += 8;

  // ── Линия ──
  doc.setDrawColor(180, 180, 180);
  doc.setLineWidth(0.3);
  doc.line(M, y, PAGE_W - M, y);
  y += 10;

  // ── Фото сверху, по центру ──
  const hero = await loadImage(photos[0]?.url);
  if (hero) {
    const boxW = 90;
    const boxH = 110;
    const boxX = (PAGE_W - boxW) / 2;
    const f = fitImage(hero.w, hero.h, boxW, boxH);
    doc.addImage(hero.dataUrl, 'JPEG', boxX + f.x, y + f.y, f.w, f.h);

    y += boxH + 6;
    if (photos[0]?.title) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(20, 20, 20);
      doc.text(String(photos[0].title).toUpperCase(), PAGE_W / 2, y, { align: 'center' });
      y += 6;
    }
    if (photos[0]?.description) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(90, 90, 90);
      const lines = doc.splitTextToSize(photos[0].description, PAGE_W - M * 2);
      doc.text(lines, PAGE_W / 2, y, { align: 'center' });
      y += lines.length * 4.5 + 6;
    }
  }

  y += 4;

  // ── Линия ──
  doc.setDrawColor(180, 180, 180);
  doc.line(M, y, PAGE_W - M, y);
  y += 8;

  // ── Что я умею ──
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(20, 20, 20);
  doc.text('ЧТО Я УМЕЮ', M, y);
  y += 8;

  skills.slice(0, 3).forEach((s) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(90, 90, 90);
    doc.text(s.num || '', M, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(20, 20, 20);
    doc.text(s.title || '', M + 10, y);

    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(70, 70, 70);
    const lines = doc.splitTextToSize(s.text || '', PAGE_W - M * 2 - 10);
    doc.text(lines.slice(0, 4), M + 10, y);
    y += lines.slice(0, 4).length * 4.5 + 4;
  });

  // ── Футер ──
  doc.setDrawColor(180, 180, 180);
  doc.line(M, PAGE_H - M, PAGE_W - M, PAGE_H - M);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text('Великий Новгород · 2026', M, PAGE_H - M + 5);
  doc.text('fazliddin.dev', PAGE_W - M, PAGE_H - M + 5, { align: 'right' });

  doc.save('Fazliddin-Muzafarov-Portfolio.pdf');
}