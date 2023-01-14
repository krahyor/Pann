export default interface Announcement{
    id: number
    topic: string
    description: string
    remarkIfPositive: string
    remarkIfNegative: string 
    pubDateTime: Date
    userCode: string
  }
export interface IRepository<T> { 
    getAll(filter: any|undefined): Promise<T[] | null>; 
}
 
export class AnnouncementRepository implements IRepository<Announcement> {
    async getAll(): Promise<Announcement[] | null> {
        return [
            { id: 1, topic: '240-124 Midterm 1/2566',description: 'คะแนน Assignment ชิ้นที่ 1',remarkIfPositive:'1',remarkIfNegative:'0',pubDateTime:new Date('2022-12-21 10:30:00'), userCode: 'suthon.s'}
        ]
    }
}