const controller = {
    index: (req,res,next) => {
        res.json({ 
            movies: [
                { title: 'Forest Gump' },
                { title: 'Titanic' },
                { title: 'The notebook' },
                { title: 'Avengers End Game' },
                { title: 'The origin' }
            ]
        })
    }
}

export default controller;