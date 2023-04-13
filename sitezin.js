function abrirMenu() {
    document.getElementById('nave').style.width = '250px'
    document.getElementById('btn-abrir').style.display = 'none'
    document.getElementById('btn-fechar').style.display = 'inline'
}

function fecharMenu() {
    document.getElementById('nave').style.width = '0px'
    document.getElementById('btn-fechar').style.display = 'none'
    document.getElementById('btn-abrir').style.display = 'inline'
}