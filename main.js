const app = document.querySelector('.app');
const nativeDialog = document.querySelector('#my-dialog');
const dialogState = document.querySelector('#dialogState');

if (app) {
    app.dataset.ready = 'true';
}

if (nativeDialog && dialogState) {
    nativeDialog.addEventListener('close', () => {
        const result = nativeDialog.returnValue || 'dismissed';
        dialogState.textContent = `Dialog closed with: ${result}.`;
    });

    nativeDialog.addEventListener('cancel', () => {
        dialogState.textContent = 'Dialog canceled with Escape.';
    });
}

console.log('Vite starter ready.');
