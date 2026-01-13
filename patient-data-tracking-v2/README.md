# Patient Data Tracking System

A simple patient tracking system that works with `file://` protocol. Each patient has a dedicated folder containing their data and transcripts.

## Structure

```
patient-data-tracking-v2/
├── index.html              # Main dashboard
├── patients/               
│   ├── patient-id-folder/  # One folder per patient
│   │   ├── patient-id.html # Patient's display page
│   │   ├── patient-id.json # Patient's data model (JSON)
│   │   ├── transcripts/    # Consultation transcripts (.txt)
│   │   └── labs/           # Blood tests and other data
└── README.md              
```

## Consultation Transcripts & Summaries

When a new transcript is provided:
1. **Save the transcript**: Place the raw text file in the patient's `transcripts/` folder (e.g., `2026-01-02-transcript.txt`).
2. **Update the JSON**: Add a summary, notes, and next steps to the `meetings` array in the patient's `.json` file.
3. **Update the HTML**: Refresh the patient's `.html` file by adding the new meeting entry to the "Consultation Notes" section and updating the "Insights & Patterns" if necessary.

## How to Use

### Viewing Patients

1. **Open `index.html`** directly in your web browser (double-click the file)
2. You'll see a sidebar on the left with all patient names
3. Click on any patient name to view their detailed page
4. Each patient page shows 4 sections:
   - **Pre-Dry Fasting** - Baseline symptoms before treatment
   - **After Dry Fasting** - Symptoms after dry fasting cycles
   - **After T3 Cycle** - Symptoms after T3 treatment
   - **After Refeeding** - Symptoms after refeeding cycles

### Adding a New Patient

1. **Add patient to sidebar**: Edit `index.html` and add the patient to the `PATIENT_DATA` array:
   ```javascript
   {
       id: "patient-005",
       name: "New Patient Name",
       // ... other data
   }
   ```

2. **Create patient HTML file**: Copy one of the existing patient HTML files (e.g., `patient-001.html`) to `patients/patient-005.html`

3. **Update the patient HTML file** with the new patient's information:
   - Change the name in the header
   - Update the info grid (age, gender, weight, height, etc.)
   - Add symptoms to the appropriate sections

### Editing Patient Data

Simply edit the patient's HTML file directly:
- Open `patients/patient-XXX.html` in a text editor
- Add new entries to any of the 4 sections
- Each section can have multiple entries with dates, symptoms, and notes
- Save and refresh your browser

## Patient Page Structure

Each patient page has 4 sections:

1. **Pre-Dry Fasting** - Baseline assessment
2. **After Dry Fasting** - Post dry fasting cycle data
3. **After T3 Cycle** - Post T3 treatment data
4. **After Refeeding** - Post refeeding cycle data

Each section can contain:
- **Date** - When the assessment was done
- **Symptoms** - List of symptoms with severity ratings
- **Notes** - Additional observations or information

## Example Entry Format

To add a new entry to a section, copy this format:

```html
<div class="entry">
    <div class="entry-date">Date: 2025-01-20</div>
    <div><strong>Symptoms:</strong></div>
    <ul class="symptoms-list">
        <li>Fatigue: 5/10</li>
        <li>Headaches: 3/10</li>
        <!-- Add more symptoms -->
    </ul>
    <div class="notes"><strong>Notes:</strong> Your notes here</div>
</div>
```

## Features

- ✅ Works with `file://` protocol - no web server needed
- ✅ Sidebar navigation for easy patient access
- ✅ Clean, simple interface
- ✅ All data stored in HTML files - easy to edit
- ✅ 4 organized sections per patient
- ✅ Responsive design

## Notes

- All data is stored directly in HTML files
- No database or external files needed
- Works offline
- Easy to backup - just copy the folder
- Easy to share - send the entire folder
