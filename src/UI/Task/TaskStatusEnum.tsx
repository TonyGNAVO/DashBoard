

export class TaskStatusEnum {

    static URGENT = new TaskStatusEnum("#FEC400", "#FFFFFF", "Urgent")
    static NEW = new TaskStatusEnum("#29CC97", "#FFFFFF", "New")
    static DEFAULT = new TaskStatusEnum("#F0F1F7", "#9FA2B4", "Default")

    private constructor(readonly backgroundColor: string, readonly color: string, readonly name: string) {

    }

}

