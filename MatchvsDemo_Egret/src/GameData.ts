declare class UserScore{
    public userID:number;
    public score:number;
    constructor(userID:number, score:number)
}

class GameData {
    public static CHANNEL = "MatchVS-Test";
    public static DEFAULT_ENV = "alpha";
    public static ENVIRONMENT = {"dev":"alpha","pro":"release"}
    public static gameID:number = 200757;
    public static engine:MatchvsEngine = new MatchvsEngine();
    public static response:MatchvsResponse = new MatchvsResponse();
    public static userInfo:MsRegistRsp = null;
    public static matchType:number = 0; //匹配类型
    public static randomMatch:number = 1;//随机匹配
    public static specialMatch:number = 2;//指定房间号匹配
    public static tagsMatch:number = 3; //指定属性匹配
    public static maxPlayerNum:number = 3;
    public static playerUserIds:Array<number> = null;
    public static isRoomOwner:boolean = false;
    public static gameStartEvent:string = "gameStart";
    public static playerPositionEvent:string = "playerPosition";
    public static gainScoreEvent:string = "gainScore";
    public static newStarEvent:string = "newStar";
    public static changeStarEvent:string = "changeStar";
    public static gameReadyEvent:string = "gameReady";
    public static events = {};
    public static syncFrame:boolean = false;
    public static isGameOver:boolean = false;
    public static starPositionX:number = 0;
    public static starPositionY:number = 0;
    public static frameRate:number = 5;
    public static defaultHeight:number = 400;
    public static roomID:string = "";
    public static userScoreAll:Array<UserScore>;
    public static number1:string = "";
    public static number2:string = "";
    public static number3:string = "";
    public static width:number;
    public static height:number;
    public static playerTime:number = 180;
    public static roomPropertyType = {"mapA":"mapA","mapB":"mapB"};
    public static roomPropertyValue = "mapA";
    public static createRoomInfo = new MsCreateRoomInfo("MatchvsDemoEgret",3,0,0,1,"mapA");
}