class RoomView extends eui.Group {
    
    private _roomView_H = 120;
    private _roomView_W = 450;
    private _roomButton_H = 40;
    private _roomButton_W = this._roomView_W - 50;

    private _roomID:string;

    private _roomIDLabel:eui.Label;
    
    constructor(){
        super();
        this.width = this._roomView_W;
        this.height = this._roomView_H;
        
    }

    protected createChildren():void {
        super.createChildren();
    }


    /**
     * 创建内容
     */
    public layContents(x,y:number,roomID:string, extendInfo:string):void {

        //房间号
        this._roomID = roomID;

        //设置默认主题
        var theme = new eui.Theme(`resource/default.thm.json`, this.stage);
        //创建一个 Group
        let myGroup = new eui.Group();
        myGroup.x = x;
        myGroup.y = y;
        myGroup.width = this.width;
        myGroup.height = this.height;
        this.addChild(myGroup);

        //创建进入房间按钮
        let btn1:eui.Button = new eui.Button();
        btn1.label = "开始进入房间匹配";
        btn1.width = this._roomButton_W;
        btn1.height = this._roomButton_H;
        btn1.x = (this._roomView_W - this._roomButton_W)/3;
        btn1.y =  myGroup.height - (this._roomButton_H+10);
        btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.mbuttonEnterRoom, this);
        myGroup.addChild(btn1);

        // 绘制矩形用于显示 myGroup 的轮廓
        let outline:egret.Shape = new egret.Shape;
        outline.graphics.lineStyle(3,0x00ff00);
        outline.graphics.beginFill(0x112200,0);
        outline.graphics.drawRect(0, 0, this._roomView_W, this._roomView_H);
        outline.graphics.endFill();
        myGroup.addChild(outline);


        let rooidLabel = new eui.Label();
        rooidLabel.textColor = 0xffffff;
        rooidLabel.size = 18;
        rooidLabel.text = "房间号："+roomID + "\n"+extendInfo;
        rooidLabel.textAlign = "center";
        rooidLabel.width = this._roomButton_W;
        rooidLabel.height = 60;
        rooidLabel.x =  (myGroup.width - this._roomButton_W)/2;
        rooidLabel.y =  10;
        this._roomIDLabel = rooidLabel;
        myGroup.addChild(rooidLabel);

    }

    private getRoomDetail(roomID:string){
        GameData.response.getRoomDetailResponse = this.getRoomDetailResponse.bind(this);
        GameData.engine.getRoomDetail(roomID);
    }

    private getRoomDetailResponse(rsp:MsGetRoomDetailRsp){
        if(rsp.status !== 200){
            console.log("getRoomDetailResponse error status:"+ rsp.status);
            return;
        }
        
        if(rsp.state === 1){
            console.log("检查房间状态为：开放状态可以进入");
            GameSceneView._gameScene.createRoom(this._roomID,GameData.userInfo.avatar);
        }else{
            console.log("检查房间状态为：关闭状态不可以进入，请刷新房间列表");
        }
    }

    private mbuttonEnterRoom(event:egret.TouchEvent){
        this.getRoomDetail(this._roomID);
    }

}