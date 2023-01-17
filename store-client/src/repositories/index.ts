import { AnnouncementRepository } from "./AnnouncementRepository";
import { UserResultRepository } from "./UesrResultRepository";

const repository = {
    announcements: new AnnouncementRepository(),
    UserResults: new UserResultRepository()
}
export default repository
