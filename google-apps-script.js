/**
 * GOOGLE APPS SCRIPT — Webhook lưu lead vào Google Sheets
 * ──────────────────────────────────────────────────────────
 * HƯỚNG DẪN DEPLOY:
 * 1. Tạo Google Sheets mới.
 * 2. Mở script.google.com → New project → dán toàn bộ file này.
 * 3. Deploy → New deployment → chọn loại "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy Web App URL → dán vào NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL (.env.local)
 *
 * Sheet "Leads"        → form liên hệ + lead từ chatbot
 * Sheet "Newsletter"   → email đăng ký nhận tin
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === 'newsletter') {
      var nl = getOrCreateSheet_(ss, 'Newsletter', ['Thời Gian', 'Email', 'Nguồn']);
      nl.appendRow([data.timestamp, data.email, data.source || 'Newsletter']);
      return jsonOutput_({ success: true });
    }

    var sheet = getOrCreateSheet_(ss, 'Leads', [
      'Thời Gian', 'Họ Tên', 'SĐT', 'Email', 'Công Ty', 'Dịch Vụ', 'Nội Dung', 'Nguồn',
    ]);
    sheet.appendRow([
      data.timestamp, data.fullName, "'" + data.phone, data.email,
      data.company, data.service, data.message, data.source,
    ]);
    return jsonOutput_({ success: true });
  } catch (err) {
    return jsonOutput_({ success: false, error: err.toString() });
  }
}

function getOrCreateSheet_(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold').setBackground('#1565C0').setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonOutput_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
