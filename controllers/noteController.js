const fs = require('fs')
const data = require('../data.json')


exports.index = (req, res) => {
    const n = data.notes.sort()
    return res.render('index', { notes: n})
}

exports.post = (req, res) => {
    let id = Number(data.notes.length + 1)

    let note = {
        ...req.body,
        id
    }

    data.notes.push(note)

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('error ' + err)
    })


    return res.redirect('/notes')
}

exports.edit = (req, res) => {
    const { id } = req.params

    const foundNote = data.notes.find((i) => {
        return i.id == id

    })

    if (!foundNote) {
        return res.send('Note not found')
    }

    return res.render('edit', { note: foundNote })
}

exports.put = (req, res) => {


    data.notes[0] = req.body



    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            return res.send('Writer error: ' + err)
        }
    })

    return res.redirect('/notes')


}
exports.delete = (req,res)=>{
    const {id} = req.body

    const foundNotes = data.notes.filter((note)=>{
        if(note.id != id){
            return true
        }
    })

    data.notes = foundNotes

    fs.writeFile('data.json',JSON.stringify(data,null,2),(err)=>{
        if(err) return res.send("error: " + err)
    })

    return res.redirect('/')
}
