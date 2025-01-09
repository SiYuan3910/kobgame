const AC_GAME_OBJECTS = [];    //存储所有的对象

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() {   // 第一次执行
 
    }

    update() {  //除了第一次，每次都执行

    }

    on_destroy() {  //删除之前执行

    }

    destroy() {  //删除的时候执行
        this.on_destroy();
        for (let i in AC_GAME_OBJECTS) {
            let obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }

}

let last_timestamp; //？？？这个timestamp被赋值了吗

const step = (timestamp) => {
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;

    requestAnimationFrame(step);
}

requestAnimationFrame(step);