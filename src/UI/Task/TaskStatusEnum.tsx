

export class TaskStatusEnum {

    static URGENT = new TaskStatusEnum("#FEC400", "Urgent")
    static NEW = new TaskStatusEnum("#29CC97", "New")
    static DEFAULT = new TaskStatusEnum("##F0F1F7", "Default")

    private constructor(readonly colorStatus: string, readonly textStatus: string) {

    }

}

