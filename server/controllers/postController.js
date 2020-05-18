module.exports = {
    createPost: (req,res) =>{
        const {user_id, title, image, review} = req.body,
              db = req.app.get('db');
        db.posts.create_post(user_id, image, review, title)
        .then(()=> res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    getAllPosts: (req, res) =>{
        const db = req.app.get('db');
        db.posts.get_all_posts()
        .then(posts=> res.status(200).send(posts))
        .catch(err=>res.status(500).send(err));
    },
    editPost: (req,res) =>{
        const {title, image, review} = req.body,
              {id} = req.params,
              db = req.app.get('db');
        db.posts.edit_post(image, review, title, id)
        .then(()=> res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    deletePost: (req,res) =>{
        const {id} = req.params,
              db =req.app.get('db');
        
        db.posts.delete_post(id)
        .then(()=> res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    getPost: (req,res) =>{
        const {id} = req.params,
              db =req.app.get('db');
        
        db.posts.get_post(id)
        .then((post)=> res.status(200).send(post))
        .catch(err => res.status(500).send(err));
    }
}