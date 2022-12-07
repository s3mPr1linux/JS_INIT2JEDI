const alunos = [
    {
        _id: 0,
        nome: "chico melato",
        notas: {
            portugues: [1, 1, 2, 2],
            matematica: [2, 2, 2, 2],
            historia: [2, 2, 3, 3],
            ciencias: [3, 3, 3, 3],
        },
    },
    {
        _id: 1,
        nome: "talita lima",
        notas: {
            portugues: [4, 4, 4, 4],
            matematica: [4, 4, 5, 5],
            historia: [5, 5, 6, 6],
            ciencias: [7, 7, 8, 9],
        },
    },
    {
        _id: 2,
        nome: "Tálison",
        notas: {
            portugues: [9, 9, 9, 9],
            matematica: [10, 9, 8, 9],
            historia: [8, 9, 9, 6],
            ciencias: [10, 7, 8, 9],
        },
    },
];


const alunosService = new AlunosService()

//Calcula a media por propiedade de cada aluno e cria uma propiedade chamda media
alunos.forEach( aluno => {
    alunosService.add(new AlunoModel(aluno))
} )


const alunosView = new AlunosView(document.querySelector('[data-table-alunos]'))


const alunosControler = new AlunosControler(alunosService, alunosView)





const formulario = document.querySelector('form')
formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    const nome = document.getElementById('first_name').value

   alunosControler.add({ nome })
})