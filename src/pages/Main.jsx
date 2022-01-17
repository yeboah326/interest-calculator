import { useState } from "react";
import Button from "../components/Button";
import InterestName from "../components/InterestName";
import MainHeading from "../components/MainHeading";
import OtherInput from "../components/OtherInput";
import PrincipalInput from "../components/PrincipalInput";
import Result from "../components/Result";
import main from "../styles/pages/main.module.css";

export default function Main() {
  const [simpleInterest, setSimpleInterest] = useState({
    principal: 0,
    annualInterestRate: 0,
    time: 0,
  });
  const [compoundInterest, setCompoundInterest] = useState({
    principal: 0,
    interestRate: 0,
    noOfTimesApplied: 0,
    noOfPeriods: 0,
  });
  const [result, setResult] = useState(0);

  const computeSimpleInterest = ({ principal, annualInterestRate, time }) =>
    principal * (1 + annualInterestRate * time);
  const computeCompoundInterest = ({
    principal,
    interestRate,
    noOfTimesApplied,
    noOfPeriods,
  }) =>
    principal *
    (1 + interestRate / noOfTimesApplied) ** (noOfTimesApplied * noOfPeriods);

  return (
    <div id={main.main}>
      <MainHeading text="Interest Calculator" />
      <div id={main.simplecompound}>
        <section id="simple">
          <InterestName text="Simple Interest" />
          <PrincipalInput
            changed={(e) =>
              setSimpleInterest({
                ...simpleInterest,
                principal: parseFloat(e.target.value),
              })
            }
          />
          <OtherInput
            label="Annual interest rate"
            changed={(e) =>
              setSimpleInterest({
                ...simpleInterest,
                annualInterestRate: parseFloat(e.target.value),
              })
            }
          />
          <OtherInput
            label="Time (years)"
            changed={(e) =>
              setSimpleInterest({
                ...simpleInterest,
                time: parseFloat(e.target.value),
              })
            }
          />
          <Button
            clicked={(e) => {
              setResult(computeSimpleInterest(simpleInterest));
            }}
          />
        </section>
        <section id="compound">
          <InterestName text="Compound Interest" />
          <PrincipalInput
            changed={(e) =>
              setCompoundInterest({
                ...compoundInterest,
                principal: parseFloat(e.target.value),
              })
            }
          />
          <OtherInput
            label="Interest rate"
            changed={(e) =>
              setCompoundInterest({
                ...compoundInterest,
                interestRate: parseFloat(e.target.value),
              })
            }
          />
          <OtherInput
            label="No. applied per period"
            changed={(e) =>
              setCompoundInterest({
                ...compoundInterest,
                noOfTimesApplied: parseFloat(e.target.value),
              })
            }
          />
          <OtherInput
            label="No. time periods"
            changed={(e) =>
              setCompoundInterest({
                ...compoundInterest,
                noOfPeriods: parseFloat(e.target.value),
              })
            }
          />
          <Button
            clicked={() => setResult(computeCompoundInterest(compoundInterest))}
          />
        </section>
      </div>
      <section id="result" style={{ width: "45%", padding: "3em 0" }}>
        <Result result={result} />
      </section>
    </div>
  );
}
