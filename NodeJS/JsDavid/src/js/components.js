enviar = document.querySelector('button')
nameG = document.getElementById('nameGrup')
var id = 0
enviar.addEventListener('click',event =>{
    grupo = localStorage.setItem('nameGrupo',nameG.value)
    id +=1
    guardarId = localStorage.setItem('id_grupo', id)
    parentId = localStorage.setItem('parent_id', id)
})

