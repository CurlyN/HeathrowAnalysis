function getColor(d) {
    return d>90 ? '#67000d':
           d> 80 ? '#a50f15':
           d > 70 ? '#cb181d' :
           d > 60  ? '#ef3b2c' :
           d > 50  ? '#fb6a4a' :
           d > 40  ? '#fc9272' :
           d > 30  ? '#fcbba1' :
           d > 20   ? '#fee0d2' :
                      '#fff5f0';
}

    function PopUpShow(){
        $("#popup1").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }


var i = 0;
var k=0;
var time_line=['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
var BaseConfig=[];
var start = 26;
var end = 26;
var data = 3;
var today = new Date();
////data = data-1;
//console.log(data);

function getHoursValue(eggN, topic){

k=0;
var res =[];
var values_at_each_hour =  [];
BaseConfig=[];
var d = new Date();
var n = d.getDate()-1;
var data;
if (n / 10 > 1)
{
  data = n;
}else
{
  data = "0"+n;
}

var month=d.getMonth()+1;
if (month / 10 < 1)
{
  month = "0"+month;
}

console.log(data);
//for (var data=1;data<3;data++){
for ( var j = 0; j<=22;j++){
      var url1='https://api.opensensors.io/v1/messages/topic/%2Forgs%2FBreatheHeathrow%2F'+topic.toLowerCase()+'%2F'+eggN+'?api-key=8c0ebeee-3a4e-4ef4-a660-6eef36e653e8&start-date=2015-'+month+'-'+data+'T'+time_line[j]+':00:00&end-date=2015-'+month+'-'+data+'T'+time_line[j]+':30:00';
     // console.log(url1);
      BaseConfig=jQuery.ajax({
                            async:false,
                            url:url1,
                            ataType: 'json',
                            done: function(results) {
                                JSON.parse(results);
                                return results;
                            },
                            fail: function( jqXHR, textStatus, errorThrown ) {
                                console.log( 'Could not get posts, server response: ' + textStatus + ': ' + errorThrown );
                            }
                            }).responseJSON;

      //console.log(date);
      //console.log(topic);
      //console.log(eggN);
      if (BaseConfig.messages!=null){
      //console.log(BaseConfig.messages);
      var values =[];
      var time_scale = [];
      var sum = 0;
      var average=0;
      var v=0;
      var vallength;

      for (i=0; i< BaseConfig.messages.length;i++){
        //console.log("in loop: "+ getTopic( BaseConfig.messages[i]));
        //console.log(getDevice( BaseConfig.messages[i])+ " and "+eggN);
      if (getTopic(BaseConfig.messages[i]) == topic) {
        //console.log("inda topic")
          //if (parseInt(getDevice(BaseConfig.messages[i])) == parseInt(eggN)) {
                  if (getValue(BaseConfig.messages[i])!= null){
                    sum+=parseFloat(getValue(BaseConfig.messages[i]));
                   // console.log(getValue(BaseConfig.messages[i]));
                    v++;

                  }
         }
        //}
       }
      
      average=parseFloat(sum)/v;
      //console.log("Sum "+sum+" v "+v);
      if (average >0) {
      values_at_each_hour[k]=average;}
      else {
          values_at_each_hour[k] = 0;
      }

      k++;

  }
}
var sum =0;var len = 0;
for (var j=0;j<=values_at_each_hour.length;j++)
{  
    
    if (values_at_each_hour[j]!=0)
    {
      sum += parseFloat(values_at_each_hour[j]);
        len++;
    }
}
var av = sum/len;
//}
console.log(av);

 return values_at_each_hour;
}


      function getValue(number){
        res =  number.payload.text.split(',');
        var values = res[3].split(':');
        
        //console.log(values[1]);
                    return values[1];
      }

      function getDevice(number){
        res =  number.topic.split('/');
        //var devices = res[1].split(':');
                    return res[4];
      }


      function getTopic(number){
        res =  number.topic.split('/');
       // var values = res[0].split(':');
        //console.log(values[1]);
        //console.log(res[3].toUpperCase())
                    return res[3].toUpperCase();
      }


function myFunction() {
  if (((parseInt(document.getElementById("endtext").value) - parseInt(document.getElementById("sarttext").value))==1) && (document.getElementById("endtext").value.length==2) && (document.getElementById("sarttext").value.length==2))
  {
    start = document.getElementById("sarttext").value;
    end = document.getElementById("endtext").value;
    console.log("start "+start+" end "+end);
    alert("Parameters have been successfully changed.");
  }else{
     alert("Unfortunately, you entered wrong number. Enter another value, please.");
  }

}