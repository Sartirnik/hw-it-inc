import {Router} from "express";
import {
    createVideoHandler,
    getVideos,
    getVideoByIdHandler,
    updateVideosHandler,
    deleteVideoByIdHandler
} from "./handlers/videoHandlers";
import {videoRepos} from "./infrastructure/videoRepos";

export const VideoRouter = Router();

// Очистка базы для тестов
VideoRouter.delete('/testing/all-data', (req, res) => {
    videoRepos.clearAll();
    res.sendStatus(204);
});

// CRUD для видео
VideoRouter.get('/', );
VideoRouter.post('/', );
VideoRouter.get('/:id', );
VideoRouter.put('/:id', );
VideoRouter.delete('/:id', );
