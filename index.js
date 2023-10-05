const fs=require("fs")

const dt=fs.readFileSync("input.json","utf-8");
const data=JSON.parse(dt);

for(var i=0;i<data.length;i++)
{
    var str="";
    str+=data[i].name;
    str+="|";
    str+=data[i].age;
    str+="|";
    str+=data[i].gender;
    str+="|";
    str+=data[i].city;
    fs.appendFileSync("notes.txt",str);
    fs.appendFileSync("notes.txt","\n");
}