module.exports.productsController = {
    getMessages: (req, res) => {
        // код вывода сообщений
        res.json('Добро пожаловать')
    },
    getMessages1: (req, res) => {
        res.send(`id : ${req.params.id}`)
    },
    createMessage: (req, res) => {
        // код добавления сообщений
        res.json(['nintendo', 'bethesda', '2K'])
    },

    deleteMessage: (req, res) => {
        // код удаления сообщения
        res.send(`id: ${req.params.id} товара удален`)
    },
    
};
