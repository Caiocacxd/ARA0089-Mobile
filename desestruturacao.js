const salaDeAula = {
    aluno: [
    {
        nome: 'joao',
        marca: 'bic',
        ponta: 'fina',
        carga: '100%',
        tipo: 'unipin',
        tampa: true,
        botao: true,
    },
    {
        nome: 'lucas',
        marca: 'bic',
        ponta: 'fina',
        carga: '100%',
        tipo: 'unipin',
        tampa: true,
        botao: true,
    }
],
    professor: [
        {
            nome: 'felipe',
            materias: 'portugues, ingles, espanhol'

        }
    ],
    quantidadeDeCadeiras: 20,
    mesas: 20,
    computadores: 12,
    projetor: true
};

const {aluno: alunos} = salaDeAula;
const {nome} = alunos[0];

console.log(nome);
console.log(alunos);

