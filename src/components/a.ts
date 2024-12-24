interface DataType {
    name: string;
    age: number;
}
type R = Record<string, any>;
export const fun = <T extends R>(value: T) => {
    const obj: R = value
    obj.name = '范老师'
    const data: DataType[] = [
        {
            name: "张三",
            age: 17,
        },
    ];
    return {
        obj,
        data,
    };
};