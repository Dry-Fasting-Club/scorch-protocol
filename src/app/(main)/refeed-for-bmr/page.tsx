import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";

export const metadata: Metadata = {
  title: "9-Month BMR Reconstruction — The Scorch Protocol",
  description:
    "The 9-month BMR reconstruction protocol — how to rebuild metabolic rate after deep caloric restriction using systematic refeeding.",
};

export default function RefeedForBmrPage() {
  return (
    <>
      <h1>9-Month Metabolism Repair Plan</h1>
      <p>
        This plan uses data from the{" "}
        <strong>Minnesota Starvation Experiment (1944–1945)</strong> to help
        you fix a slowed-down metabolism. It explains how your body shuts down
        certain parts to save energy and how to &ldquo;rebuild&rdquo; your
        health after a long illness or fasting.
      </p>

      <div className="guiding-questions box-red">
        <h3>What You Need to Know</h3>
        <div className="question-item">
          <span className="question-label">Recovery Takes Time:</span>
          Healing your body is like <strong>rebuilding a house</strong>. It
          needs 8 to 12 months of eating plenty of food to fix the damage. Your
          body has to move from &ldquo;survival mode&rdquo; back to &ldquo;health
          mode.&rdquo;
        </div>
        <div className="question-item">
          <span className="question-label">Food is the Key:</span>
          The most important finding:{" "}
          <strong>Calories are the only way to fix a slow metabolism.</strong>{" "}
          Vitamins and protein are wasted if you aren&rsquo;t eating enough total
          energy (calories).
        </div>
        <div className="question-item">
          <span className="question-label">The 9-Month Goal:</span>
          After about 9 months, your body finally feels &ldquo;safe.&rdquo; The
          survival alarm in your brain turns off, and your metabolism (BMR) goes
          back to normal.
        </div>
      </div>

      <h2>The &ldquo;Survival List&rdquo;: What Shuts Down First</h2>
      <p>
        When you are sick or starving, your body &ldquo;turns off the
        lights&rdquo; in certain areas to save your brain and heart. Healing
        means &ldquo;re-lighting&rdquo; these systems in this order:
      </p>

      <table>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Part of the Body</th>
            <th style={{ width: "70%" }}>What Shuts Down</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Skin and Hair</strong></td>
            <td>
              Your body stops making oil and new skin cells. This leads to a
              dry scalp, brittle skin, and thinning hair.
            </td>
          </tr>
          <tr>
            <td><strong>Hormones</strong></td>
            <td>
              Sex hormones drop. This causes a low sex drive and irregular
              periods in women.
            </td>
          </tr>
          <tr>
            <td><strong>Body Heat</strong></td>
            <td>
              Your body temperature drops, making you feel cold all the time.
            </td>
          </tr>
          <tr>
            <td><strong>Immune System</strong></td>
            <td>
              Your body makes fewer white blood cells, making it easier for you
              to get sick.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>The &ldquo;Energy First&rdquo; Rule</h2>
      <p>
        The Minnesota Experiment showed that you cannot heal your body on 2,000
        to 2,500 calories. For a starving or sick body, that amount only keeps
        you where you are. To actually fix your metabolism, you must eat 3,500
        to 4,000+ calories a day.
      </p>

      <div className="guiding-questions box-green">
        <h3>Key Metabolic Rules</h3>
        <div className="question-item">
          <span className="question-label">The Supplement Problem:</span>
          Vitamins and extra protein are wasted if you aren&rsquo;t eating
          enough total calories. If you eat too little, your body just burns
          these expensive nutrients like cheap fuel.
        </div>
        <div className="question-item">
          <span className="question-label">The 4,000 Calorie Mark:</span>
          Healing only really starts when you reach{" "}
          <strong>3,500 to 4,000+ calories</strong>. Eating less than this
          stalls your recovery.
        </div>
        <div className="question-item">
          <span className="question-label">Researcher&rsquo;s Note:</span>
          <em>
            &ldquo;Unless you eat plenty of calories, extra protein and
            vitamins won&rsquo;t help much.&rdquo;
          </em>{" "}
          Your body needs raw energy for a long time to fix its metabolism.
        </div>
      </div>

      <h2>How to Start Eating Again (The Safe Start)</h2>
      <p>
        While 4,000 calories is the goal, you cannot start there on day one.
        You must slowly introduce your body to all that food to stay safe.
      </p>

      <div className="guiding-questions box-yellow">
        <h3>Safety Rules</h3>
        <div className="question-item">
          <span className="question-label">Heart Health:</span>
          Do <strong>NOT</strong> eat 5,000 calories in the first week. Slowly
          increase your food intake to avoid &ldquo;Refeeding Syndrome.&rdquo;
          This is a dangerous condition where sudden spikes in insulin can cause
          your heart to fail.
        </div>
        <div className="question-item">
          <span className="question-label">Insulin Spikes:</span>
          Eating a lot of food after a fast causes a huge rush of insulin. If
          it happens too fast, it can pull vital minerals out of your blood and
          into your cells, which can be deadly.
        </div>
        <div className="question-item">
          <span className="question-label">No Caffeine:</span>
          Avoid caffeine. It makes it harder for your cells to handle insulin
          and forces your already tired body to work too hard, which slows down
          your recovery.
        </div>
      </div>

      <h2>The Timeline: The &ldquo;Year-Long Cavity&rdquo;</h2>
      <p>
        Recovery is not a switch; it is a 9-month biological season. The body
        follows a predictable sequence of restoration, prioritizing survival
        mechanisms before luxury functions.
      </p>

      <h3>Phase I: The Survival Phase (Months 1–3)</h3>
      <p>This phase is cut down to 1 month if you use the Scorch Protocol correctly.</p>
      <div className="guiding-questions box-blue">
        <h4>Goal: Stabilize the heart and stay safe.</h4>
        <div className="question-item">
          <span className="question-label">How Your Body Feels:</span>
          Your body is in &ldquo;survival mode&rdquo; and your metabolism is
          slowed down by about <strong>40%</strong>. You will likely feel
          &ldquo;hungry but exhausted.&rdquo;
        </div>
        <div className="question-item">
          <span className="question-label">The 3,000 Calorie Rule:</span>
          You must eat more than <strong>3,000 to 3,500 calories</strong> to
          tell your brain the famine is over. Anything less just maintains a
          starvation state.
        </div>
        <div className="question-item">
          <span className="question-label">Feeling Worse First:</span>
          You might actually feel worse at first. As your nervous system
          &ldquo;wakes up,&rdquo; you might feel more annoyed and think about
          food more. This is a sign that your body is turning back on.
        </div>
      </div>

      <h3>Phase II: The &ldquo;Fat Buffer&rdquo; Phase (Months 3–6)</h3>
      <p>
        The Scorch Protocol uses T3, hGH, and specific foods to help you move
        through this phase faster and avoid too much fat gain.
      </p>
      <div className="guiding-questions box-orange">
        <h4>Goal: Build an &ldquo;emergency fund&rdquo; of energy.</h4>
        <div className="question-item">
          <span className="question-label">Fat Before Muscle:</span>
          The body is programmed to build fat first. In the study, men had to
          reach <strong>140% of their original fat</strong> before their muscles
          started growing back.
        </div>
        <div className="question-item">
          <span className="question-label">Body Defense:</span>
          This fat gain is a protection. Your body won&rsquo;t spend energy on
          building muscle until it feels safe with enough fat to survive another
          famine.
        </div>
        <div className="question-item">
          <span className="question-label">Warming Up:</span>
          You will notice you stop feeling cold all the time as your body starts
          spending energy on keeping you warm.
        </div>
        <div className="question-item">
          <span className="question-label">Getting Through It:</span>
          This is the hardest part mentally. Gaining fat is a sign the plan is
          working; your body is prioritizing survival over looks.
        </div>
      </div>

      <h3>Phase III: Rebuilding Muscle (Months 6–9+)</h3>
      <div className="guiding-questions box-deepgreen">
        <h4>Goal: Build muscle and return to normal.</h4>
        <div className="question-item">
          <span className="question-label">Muscle Growth:</span>
          Your muscles and strength only start growing back{" "}
          <strong>after</strong> your body feels safe with its fat buffer. By
          month 7, your body finally allows the energy to be spent on deep
          cellular repair.
        </div>
        <div className="question-item">
          <span className="question-label">Metabolism Normalizes:</span>
          Your metabolism finally returns to its original level. The
          &ldquo;braking system&rdquo; that was slowing you down finally turns
          off.
        </div>
        <div className="question-item">
          <span className="question-label">Ending the Famine:</span>
          The constant, intense hunger finally goes away. This means the
          &ldquo;famine alarm&rdquo; in your brain has finally been turned off.
        </div>
        <div className="question-item">
          <span className="question-label">Be Patient:</span>
          It can take some people up to two years to get back to their full
          strength.{" "}
          <strong>
            Patience is the most important thing for your metabolism.
          </strong>
        </div>
      </div>

      <h2>Metabolism Repair Requirements</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "40%" }}>What You Need</th>
            <th style={{ width: "60%" }}>Why it&rsquo;s Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>High Daily Calories</strong></td>
            <td>
              <strong>3,500 to 4,500+ kcal</strong> (You must eat plenty of food)
            </td>
          </tr>
          <tr>
            <td><strong>Protein</strong></td>
            <td>
              Protein is second. Without enough total calories, protein is just
              burned as waste.
            </td>
          </tr>
          <tr>
            <td><strong>Signs of Success</strong></td>
            <td>Healthy skin oil, libido returns, and you feel more social.</td>
          </tr>
          <tr>
            <td><strong>The 9-Month Mark</strong></td>
            <td>
              When your body finally trusts its environment and feels safe again.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Summary of Success Markers</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Phase</th>
            <th style={{ width: "40%" }}>What You See</th>
            <th style={{ width: "40%" }}>What is Happening Inside</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Phase I</strong>
              <br />
              (Months 1–3)
            </td>
            <td>Dry skin, thinning hair, slow pulse</td>
            <td>
              <strong>Survival Mode:</strong> Your metabolism is very slow.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Phase II</strong>
              <br />
              (Months 3–6)
            </td>
            <td>Weight gain around your middle.</td>
            <td>
              <strong>Rising Metabolism:</strong> Your body is building a safety
              fund.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Phase III</strong>
              <br />
              (Months 6–9+)
            </td>
            <td>Skin oils return, libido returns, you feel social.</td>
            <td>
              <strong>Normal Metabolism:</strong> The &ldquo;Famine Alarm&rdquo;
              turns off.
            </td>
          </tr>
        </tbody>
      </table>

      <div className="guiding-questions box-purple" style={{ margin: "3rem 0" }}>
        <h3>Key Lessons</h3>
        <ul style={{ margin: "1rem 0", paddingLeft: "1.5rem" }}>
          <li>
            <strong>Calories come first:</strong> Without enough energy, other
            nutrients are wasted.
          </li>
          <li>
            <strong>Recovery takes time:</strong> It takes at least 9 months
            (and up to 2 years) to fully heal.
          </li>
          <li>
            <strong>Fat before muscle:</strong> Your body saves energy in fat
            before building expensive muscle.
          </li>
          <li>
            <strong>Trust the plan:</strong> Fat gain and initial discomfort
            mean the plan is working.
          </li>
          <li>
            <strong>Patience is necessary:</strong> Trying to rush will only
            delay your recovery.
          </li>
        </ul>
      </div>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="refeed-for-bmr" sectionTitle="9-Month BMR Reconstruction" />
    </>
  );
}
