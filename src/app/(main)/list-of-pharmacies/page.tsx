import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";

export const metadata: Metadata = {
  title: "List of Pharmacies | The Scorch Protocol",
  description:
    "Trusted pharmacies for sourcing T3 (liothyronine), hGH, and peptides used in The Scorch Protocol, organized by country.",
};

export default function ListOfPharmaciesPage() {
  return (
    <>
      <h1>Popular and Reliable Prescription-Free Pharmacies</h1>

      <p>
        The table below lists some popular and reliable long-established
        &ldquo;no prescription&rdquo; pharmacies. This pharmacies list was last
        updated in 2025.
      </p>

      <table className="pharma-table">
        <thead>
          <tr>
            <th>Popular and Reliable Pharmacies</th>
            <th>Founded</th>
            <th>Shipping Country</th>
            <th>Shipping Time to UK (Days)</th>
            <th>Express Shipping</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="http://www.inhousepharmacy.vu"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.inhousepharmacy.vu
              </a>
            </td>
            <td>1996</td>
            <td>Vanuatu</td>
            <td>14-42</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://goldpharma.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                goldpharma.com
              </a>
            </td>
            <td>2005</td>
            <td>Europe</td>
            <td>6</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.buy-pharma.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.buy-pharma.md
              </a>
            </td>
            <td>2007</td>
            <td>India</td>
            <td>30</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.unitedpharmacies.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.unitedpharmacies.md
              </a>
            </td>
            <td>1998</td>
            <td></td>
            <td>30</td>
            <td>EMS 7-21</td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.unitedpharmacies-uk.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.unitedpharmacies-uk.md
              </a>
            </td>
            <td>2012</td>
            <td>Hong Kong</td>
            <td>30</td>
            <td>
              EMS 7-21
              <br />
              DHL 4-7
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.alldaychemist.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.alldaychemist.com
              </a>
            </td>
            <td>2002</td>
            <td>Various</td>
            <td>20-30</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.safegenericpharmacy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.safegenericpharmacy.com
              </a>
            </td>
            <td>2014</td>
            <td>India</td>
            <td>10-14</td>
            <td>6-11</td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.cheapmedicineshop.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cheapmedicineshop.com
              </a>
            </td>
            <td>2016</td>
            <td>?</td>
            <td>?</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.alldaygeneric.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.alldaygeneric.com
              </a>
            </td>
            <td>2016</td>
            <td>India</td>
            <td>15-20</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://mexipharmacy.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                mexipharmacy.mx
              </a>
            </td>
            <td>2014</td>
            <td>Mexico</td>
            <td>25-30</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.medicinesmexico.com.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.medicinesmexico.com.mx
              </a>
            </td>
            <td>2020</td>
            <td></td>
            <td>15-30</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.premiumrxdrugs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.premiumrxdrugs.com
              </a>
            </td>
            <td>2013</td>
            <td></td>
            <td>20-30</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.reliablerxpharmacy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.reliablerxpharmacy.com
              </a>
            </td>
            <td>2004</td>
            <td></td>
            <td>20-30</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.genericdoctor.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.genericdoctor.com
              </a>
            </td>
            <td>2009</td>
            <td>India</td>
            <td>10-21</td>
            <td>5-9</td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.4nrx.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.4nrx.md
              </a>
            </td>
            <td>1999</td>
            <td></td>
            <td>30</td>
            <td>EMS 7-21</td>
          </tr>
          <tr>
            <td>
              <a
                href="http://www.4nrx-uk.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.4nrx-uk.md
              </a>
            </td>
            <td>2012</td>
            <td>Hong Kong</td>
            <td>10-30</td>
            <td>
              EMS 7-21
              <br />
              DHL 4-7
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="http://bio-japan.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                bio-japan.net
              </a>
            </td>
            <td>2013</td>
            <td>Japan</td>
            <td>5-10</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h2>Notes on These Pharmacies</h2>

      <div className="note-section">
        <p>
          <strong>The above pharmacies are prescription-free</strong> (they
          require no prescription, even if their websites say otherwise).
        </p>
        <ul>
          <li>
            <strong>Inhousepharmacy.vu</strong> sell high quality
            pharmaceutical products made by major Western pharmaceutical
            companies, as well as generic drugs. They offer free shipping, even
            on small orders.
          </li>
          <li>
            <strong>Goldpharma.com</strong> specialise in inexpensive generic
            and brand name drugs made by European pharmaceutical companies.
            Goldpharma are good quality, cheap, reliable, and have a massive
            range, so you are almost always going to find the drug you are
            looking for at Goldpharma. Goldpharma ship from within the EU, via
            their network of EU-based pharmacies, and delivery times are very
            fast within Europe, around a week or so. They are also one of the
            few pharmacies that ship to Canada.
            <br />
            <br />
            You do not need a prescription to buy from Goldpharma. At the
            checkout, you select the option &ldquo;No, I do not have a
            prescription. I like to attempt by completing a tele-medical
            consultation to receive the requested treatment&rdquo;. You then
            fill out an online questionnaire about your health (takes less than
            a minute), which acts as your prescription.
          </li>
          <li>
            <strong>Unitedpharmacies.md and unitedpharmacies-uk.md</strong>{" "}
            sell both Western pharmaceutical drugs as well as cheaper Indian
            generics. But they only ship to the US and UK respectively.
          </li>
          <li>
            <strong>4nrx.md and 4nrx-uk.md</strong> only ship to the US and UK
            respectively. They are sister companies to United Pharmacies. They
            offer free shipping on orders over $50 or &pound;50.
          </li>
          <li>
            <strong>Buy-pharma.md</strong> has very cheap prices, selling
            inexpensive generic drugs made by Indian pharmaceutical companies
            such as Cipla or Sun Pharma. They are reliable, and have good
            communications. Buy-pharma can send some of their products from
            Germany, which means faster shipping, but you have to ask them
            whether the item you want can be sent from Germany.
          </li>
          <li>
            <strong>Alldaychemist.com</strong> has cheap prices on Indian
            generics. <strong>www.reliablerxpharmacy.com</strong> is a sister
            company to AllDayChemist, and have similar stock. AllDayChemist ship
            from India, United Kingdom, New Zealand, Mauritius and the United
            States and other countries.
          </li>
        </ul>
        <p>
          <em>
            These pharmacies have been used on numerous occasions over the years
            successfully, by many people with chronic illnesses. For access to
            slow release T3, I recommend getting it from{" "}
            <a
              href="https://chronic-illness.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              chronic-illness.ca
            </a>{" "}
            and if there are any shipping issues, emailing them or using their
            form directly.
          </em>
        </p>
      </div>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="list-of-pharmacies" sectionTitle="List of Pharmacies" />
    </>
  );
}
