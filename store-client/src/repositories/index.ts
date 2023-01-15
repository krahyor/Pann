import { AnnouncementRepository } from "./AnnouncementRepository";
import { UserResultRepository } from "./UesrResultRepository";

const repository = {
    announcement: new AnnouncementRepository(),
    UserResult: new UserResultRepository()
}
export default repository
