import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function QualificationForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Qualification & Experience
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="highestQualification"
            label="Highest Qualification"
            fullWidth
            autoComplete="qualification"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="institution"
            label="Institution"
            fullWidth
            autoComplete="institution"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="yearsOfExperience"
            label="Years of Experience"
            type="number"
            fullWidth
            autoComplete="experience"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="subjectsTaught"
            label="Subjects Taught"
            fullWidth
            autoComplete="subjects"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="additionalCertifications"
            label="Additional Certifications"
            fullWidth
            autoComplete="certifications"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}