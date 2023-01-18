import { AnnouncementRepository } from "./AnnouncementRepository";
import { UserResultRepotiory } from "./UesrResultRepository";

const repositories = {
    announcements: new AnnouncementRepository(),
    userResult: new UserResultRepotiory()
}
export default repositories