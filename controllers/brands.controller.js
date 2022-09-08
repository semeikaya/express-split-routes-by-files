module.exports.brandsController = {
    getMessages: (req, res) => {
        // код вывода сообщений
        res.send('Добро пожаловать')
    },

    createMessage: (req, res) => {
        // код добавления сообщений
        res.json(['nintendo', 'bethesda', '2K'])
    },

    deleteMessage: (req, res) => {
        // код удаления сообщения
        res.send('user id: id бренда удален')
    },
     patchMessage: (req, res) => {
    
        res.send('user с id: id бренда изменен')
    },
       getMessages1: (req, res) => {
        // код вывода сообщений
        res.send('Добро пожаловать')
    },
};
