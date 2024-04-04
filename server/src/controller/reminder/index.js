import * as reminderService from '../../service/reminder.js';

export async function postReminder(req, res, next){
    try{
        const data = await reminderService.postReminder(req.body);
        return res.json(data);
    }catch(err){
        next(err);
    }
}

export async function getReminder(req, res, next)
{
    try{
        const data = await reminderService.getReminder(req.body);
        return res.json(data);
    }catch(err){
        next(err);
    }
}

export async function deleteReminder(req, res, next)
{
    try{
        const data = await reminderService.deleteReminder(req.body);
        return res.json(data);
    }catch(err){
        next(err);
    }
}