
var filmsList = ['https://static.wikia.nocookie.net/dublagempedia/images/6/6b/Shrek_Terceiro.jpg/revision/latest?cb=20210328185827&path-prefix=pt-br', 'https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFcQgQ624AQLHTwLpKyVgbWPmbuyMx238ig&usqp=CAU'];

for (let i = 0; i < filmsList.length; i++) {
    document.write("<img src=" + filmsList[i] + ">")
}
