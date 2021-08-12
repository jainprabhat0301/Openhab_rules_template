import "./styles.css";
import { data } from "./data";
export default function App() {
  console.log(data);
  const opencurly = "{";
  const closecurly = "}";
  const lessthan = "<";
  return (
    <div className="">
      {(data || []).map((item) => (
        <p>
          rule&nbsp;&nbsp; "{item}"<br />
          when
          <br />
          &emsp;&emsp;&emsp;&emsp;Item {item} received update
          <br />
          then
          <br />
          &emsp;&emsp;&emsp;&emsp;if ({item}.state.toString&nbsp;{lessthan}
          &nbsp;""&nbsp;)&nbsp;{opencurly} <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;val currentValue = <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"{opencurly}
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 'anlagenummer':'"+ deviceNumber
          +"', <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 'value':'" + {item}
          .state.toString + "',
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 'message':' {item} is changed',
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 'id': '{item}',
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 'medium':'email,push,sms',
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 'receivers':'user,admin'
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{closecurly}" <br />
          <br />
          &emsp;&emsp;&emsp;&emsp; val mqttActions =
          getActions("mqtt","mqtt:broker:MyMQTTBroker")
          <br />
          &emsp;&emsp;&emsp;&emsp;
          mqttActions.publishMQTT("prabhat/notification", currentValue) <br />
          &emsp;&emsp;&emsp;&emsp;{closecurly}
          <br />
          end
          <br />
          <br />
          //-------------------------------------------------------------------------------------------------------------------------
          <br />
        </p>
      ))}
    </div>
  );
}
