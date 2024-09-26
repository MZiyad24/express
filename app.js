const express=require('express');

const app=express();


const employee=require('./models/employee')

app.use(express.json())

require("./config/connect")

app.use(express.urlencoded({ extended: false }));   // for form submissions

app.set('view engine','ejs')   // setting to  template ejs


app.get('/content',(req,res)=>{
    res.sendFile("./views/index.html",{root:__dirname});
})

app.post('/content',(req,res)=>{
    new employee(req.body).save();
    res.redirect('/content')
})











app.get('/stu',(req,res)=>{
    res.send('List')
})


app.post('/stu',(req,res)=>{

    emp = new employee(req.body)
    emp.save()
    .then(
        (rs)=>(
            res.send(rs)
        )
    )
    .catch((err)=>console.log(err))
    
})


app.get('/add',(req,res)=>{
    employee.find()
    .then((res)=>{
        res.render('add',{aa:res})   // for ejs instead of sendfile  // render ('filename',pass object{key:val})
    })
    .catch((err)=>{
        console.log(err)
    })
    
})

app.post('/add',(req,res)=>{
    res.send("employee added")
    data=req.body;
    emp = new employee(data);
    emp.save()
    .then((res)=>{
        console.log("employee added");
        res.redirect('/add')
    })
    .catch((err)=>{
        console.log(err)
    })
})



app.listen(3000,()=>{  //(port,ann function)
    
    console.log('done')
})