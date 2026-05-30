import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";

export const metadata: Metadata = {
  title: "9-Month BMR Reconstruction | The Scorch Protocol",
  description:
    "The 9-month BMR reconstruction protocol: how to rebuild metabolic rate after deep caloric restriction using systematic refeeding.",
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

      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <svg
          viewBox="0 0 800 400"
          style={{ width: "100%", maxWidth: "800px", height: "auto" }}
          role="img"
          aria-label="Chart showing basal metabolic rate climbing from 60% baseline at month 0 to 100% restored by month 9, with phase markers for survival, repair, and full restoration"
        >
          <text x="400" y="28" textAnchor="middle" fill="#e85d04" fontSize="20" fontWeight="bold" fontFamily="sans-serif">
            9-Month BMR Reconstruction
          </text>
          <text x="400" y="48" textAnchor="middle" fill="#888" fontSize="13" fontFamily="sans-serif">
            Metabolic recovery follows a predictable S-curve, not a switch
          </text>

          <line x1="60" y1="70" x2="60" y2="340" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="50" y="74" textAnchor="end" fill="#888" fontSize="11" fontFamily="sans-serif">100%</text>
          <text x="50" y="142" textAnchor="end" fill="#888" fontSize="11" fontFamily="sans-serif">90%</text>
          <text x="50" y="210" textAnchor="end" fill="#888" fontSize="11" fontFamily="sans-serif">80%</text>
          <text x="50" y="278" textAnchor="end" fill="#888" fontSize="11" fontFamily="sans-serif">70%</text>
          <text x="50" y="340" textAnchor="end" fill="#888" fontSize="11" fontFamily="sans-serif">60%</text>
          <text x="20" y="205" textAnchor="middle" fill="#888" fontSize="12" fontFamily="sans-serif" transform="rotate(-90 20 205)">
            BMR (% of normal)
          </text>

          <line x1="60" y1="340" x2="740" y2="340" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="60" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">0</text>
          <text x="135" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">1</text>
          <text x="211" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">2</text>
          <text x="286" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">3</text>
          <text x="362" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">4</text>
          <text x="438" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">5</text>
          <text x="513" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">6</text>
          <text x="589" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">7</text>
          <text x="664" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">8</text>
          <text x="740" y="360" textAnchor="middle" fill="#888" fontSize="11" fontFamily="sans-serif">9</text>
          <text x="400" y="385" textAnchor="middle" fill="#aaa" fontSize="12" fontFamily="sans-serif" fontWeight="bold">Months of Recovery</text>

          <rect x="60" y="70" width="226" height="270" fill="rgba(239,68,68,0.06)" />
          <rect x="286" y="70" width="227" height="270" fill="rgba(251,191,36,0.06)" />
          <rect x="513" y="70" width="227" height="270" fill="rgba(34,197,94,0.06)" />

          <text x="173" y="88" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold" fontFamily="sans-serif">SURVIVAL PHASE</text>
          <text x="173" y="103" textAnchor="middle" fill="#fca5a5" fontSize="10" fontFamily="sans-serif">Stabilize, no fasting</text>
          <text x="400" y="88" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold" fontFamily="sans-serif">REPAIR PHASE</text>
          <text x="400" y="103" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="sans-serif">T3 cycles if needed</text>
          <text x="626" y="88" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="bold" fontFamily="sans-serif">RESTORATION PHASE</text>
          <text x="626" y="103" textAnchor="middle" fill="#86efac" fontSize="10" fontFamily="sans-serif">hGH support, full rebuild</text>

          <polyline
            points="60,340 135,330 211,310 286,275 362,225 438,180 513,140 589,108 664,85 740,72"
            fill="none"
            stroke="#e85d04"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          <circle cx="60" cy="340" r="4" fill="#e85d04" />
          <circle cx="286" cy="275" r="4" fill="#e85d04" />
          <circle cx="513" cy="140" r="4" fill="#e85d04" />
          <circle cx="740" cy="72" r="5" fill="#e85d04" />

          <text x="60" y="320" textAnchor="start" fill="#fca5a5" fontSize="10" fontFamily="sans-serif">60%</text>
          <text x="286" y="265" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="sans-serif">~73%</text>
          <text x="513" y="130" textAnchor="middle" fill="#86efac" fontSize="10" fontFamily="sans-serif">~92%</text>
          <text x="740" y="62" textAnchor="end" fill="#86efac" fontSize="11" fontWeight="bold" fontFamily="sans-serif">100% restored</text>
        </svg>
        <p style={{ fontSize: "0.85rem", color: "#888", marginTop: "0.5rem", fontStyle: "italic", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          A typical 9-month BMR reconstruction. The Scorch Protocol can compress the Survival Phase from 3 months to roughly 1 month when applied correctly &mdash; the rest of the curve still requires its own biological time.
        </p>
      </div>

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

      <FaithBlock
        title="Let Perseverance Finish Its Work"
      >
        <p>
          <strong>James 1:3-4: &ldquo;Because you know that the testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete, not lacking anything.&rdquo;</strong>
        </p>
        <p>
          Nine months of metabolic reconstruction is not a detour. It is the work finishing. Your metabolism, suppressed for years or decades, does not snap back in a week. That is not failure. The Minnesota Starvation Experiment showed that healthy young men needed nine months or more to fully recover their metabolic rate after severe restriction. Extend yourself at least that much patience. One of the subtler evils our culture exports is the lie that a body which doesn&rsquo;t snap back in 30 days has failed. <strong>Let perseverance finish its work. You will not lack anything.</strong>
        </p>
      </FaithBlock>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="refeed-for-bmr" sectionTitle="9-Month BMR Reconstruction" />
    </>
  );
}
