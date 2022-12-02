const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin:'*'
}));
app.use(express.json());

const students =[
    {id:1, name:"Johan Esteban Azero Soza", age:25,enroll:true},
    {id:2, name:"Kevin", age:35,enroll:false},
    {id:3, name:"Laus", age:20,enroll:false}
]


app.get('/',(req, res)=>{
    res.send('Node JS Api');
});

app.get('/api/students',(req, res)=>{
    res.send(students);
});


app.get('/api/students/:id',(req, res)=>{
    const student = students.find(c => c.id === parseInt(req.params.id));
    if(!student) return res.status(404).send('Estudiante no encontrado');
    res.send(students);
});

app.post('/api/students',(req, res)=>{
    const student = {
        id: students.length + 1,
        name: parseInt(req.body.age),
        enroll:(req.body.enroll === 'true')
    };
    students.push(student);
    res.send(student);
});


app.listen(5000, () => {
    console.log('Listening on port 5000!')
}); 

// const port = process.env.port || 5000;

// app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

