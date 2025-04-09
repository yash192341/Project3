function onOpen() {
  // gets google docs ui
  const ui = DocumentApp.getUi();

  // creates top-level menu button for InStruct with sub-button to open sidebar
  ui.createMenu('InStruct')
    .addItem('Open Sidebar', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  // loads sidebar.html
  // CHANCE 'stackSidebar' TO SEE OTHER SIDEBARS
  const html = HtmlService.createHtmlOutputFromFile('stackSidebar')
    .setTitle('InStruct')
    .setWidth(300);

  // displays sidebar.html to google docs
  DocumentApp.getUi().showSidebar(html);
}


function showDialog() {
  const html = HtmlService.createHtmlOutputFromFile('dialog')
    .setWidth(400)
    .setHeight(300);
  DocumentApp.getUi().showModalDialog(html, 'Preview Dialog');
}

// STACK HANDLERS
function handlePushStack(val) {
  Logger.log('Push Value to Stack: ' + val);
  return 'Pushed Value to Stack: ' + val;
}

function handlePopStack() {
  Logger.log('Pop Value from Stack');
  return 'Popped Value from Stack';
}

function deleteStack() {
  Logger.log('Delete Stack');
  return 'Deleted Stack';
}

// QUEUE HANDLERS
function handlePushQueue(val) {
  Logger.log('Push Value to Queue: ' + val);
  return 'Pushed Value to Queue: ' + val;
}

function handlePopQueue() {
  Logger.log('Pop Value from Queue');
  return 'Popped Value from Queue';
}

function deleteQueue() {
  Logger.log('Delete Queue');
  return 'Deleted Queue';
}

// LINKED LIST HANDLERS
function handleAddLinkedList(val) {
  Logger.log('Add Value to LinkedList: ' + val);
  return 'Add Value to LinkedList: ' + val;
}

function handleRemoveLinkedList() {
  Logger.log('Remove Value from Linked List');
  return 'Remove Value from Linked List';
}

function deleteLinkedList() {
  Logger.log('Delete Linked List');
  return 'Deleted Linked List';
}

