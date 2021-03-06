class Car
{
    constructor(name, year, power, maxSpeed)
    {
        this.name = name;
        this.year = year;
        this.power = power;
        this.maxSpeed =maxSpeed;
    }
    model = [];
    behaviourOffRoad = [];
    behaviourStreets = [];
    modificationsDateandPlace = [];
    color = [];
    addModel(models)
    {
        if (typeof models == "string")
        {
            this.model.push(modelName);
        }
        else
        {
            console.log("invalid model type");
        }
    }
    addBehaviourOffRoad(beh1)
    {
        this.behaviourOffRoad.push(beh1);
    }
    addBehaviourStreets(beh2)
    {
        this.behaviourStreets.push(beh2);
    }
    removeBehaviourOffRoad()
    {
        this.behaviourOffRoad.pop();
    }
    removeBehaviourStreets()
    {
        this.behaviourStreets.pop();
    }
    addModificationsDateandPlace(mode)
    {
        if (typeof mode == "string")
        {
            this.model.push(mode);
        }
        else
        {
            console.log("invalid model type");
        }
    }
    addColor(col)
    {
        this.addColor.push(col);
    }
    removeColor()
    {
        this.removeColor.pop();
    }
    showData(){
        console.log("name ->", this.name);
        console.log("year ->", this.year);
        console.log("power ->", this.power);
        console.log("maxSpeed ->", this.maxSpeed);
        console.log("model ->", this.model);
        console.log("color ->", this.color);
        console.log("behaviourOffRoad ->", this.behaviourOffRoad);
        console.log("behaviourStreets ->", this.behaviourStreets);
        console.log("modificationsDateandPlace", this.modificationsDateandPlace);
    }
}
module.exports = Car;
