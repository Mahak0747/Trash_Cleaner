import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
  Link,
} from "@mui/material";

const EcoHero = () => {
  return (
    <Box sx={{ fontFamily: "Segoe UI, sans-serif", bgcolor: "#f5fff5", color: "#1b3b2f" }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: "#2f5e45", py: 2 }}>
        <Toolbar sx={{ flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between" }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            🌱 EcoHero
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: { xs: 1, sm: 0 } }}>
            <Link href="#about" underline="none" color="inherit">
              <Typography variant="button">About</Typography>
            </Link>
            <Link href="#features" underline="none" color="inherit">
              <Typography variant="button">Features</Typography>
            </Link>
            <Link href="#report" underline="none" color="inherit">
              <Typography variant="button">Report</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        className="hero"
        sx={{
          background: "linear-gradient(to right, #a8e6cf, #dcedc1)",
          py: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            Be a Hero for Your Planet
          </Typography>
          <Typography variant="h6" gutterBottom>
            Report waste, earn EcoPoints, and help build a cleaner community.
          </Typography>
          <Button
            variant="contained"
            href="#report"
            sx={{
              mt: 2,
              bgcolor: "#388e3c",
              ":hover": { bgcolor: "#2e7d32" },
              borderRadius: "8px",
              px: 4,
              py: 1,
            }}
          >
            Report Now
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 6, textAlign: "center" }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            About EcoHero
          </Typography>
          <Typography>
            EcoHero is a community-driven web app that lets users report garbage dumps, track
            cleanups, and earn EcoPoints for sustainable actions.
          </Typography>
        </Container>
      </Box>

      {/* Features Section */}
      <Box id="features" sx={{ py: 6, textAlign: "center", backgroundColor: "#f0fff0" }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
            {[
              {
                icon: "📸",
                title: "Report Waste",
                desc: "Snap a photo of garbage and submit with location.",
              },
              {
                icon: "🎯",
                title: "AI Verification",
                desc: "We use AI to check if your report is valid and prioritize it.",
              },
              {
                icon: "🏆",
                title: "EcoPoints",
                desc: "Earn points, badges, and become a community EcoHero!",
              },
            ].map((feature, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 3, borderRadius: "12px", bgcolor: "#e6ffe6" }}>
                  <Typography variant="h5" gutterBottom>
                    {feature.icon} {feature.title}
                  </Typography>
                  <Typography>{feature.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Report Section */}
      <Box id="report" sx={{ py: 6, textAlign: "center" }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Ready to Report?
          </Typography>
          <Typography>
            Click below to make your first report and start earning EcoPoints.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              fontSize: "1rem",
              px: 4,
              py: 1,
              borderRadius: "12px",
              bgcolor: "#388e3c",
              ":hover": { bgcolor: "#2e7d32" },
            }}
          >
            Upload Report
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: "#2f5e45", color: "white", textAlign: "center", py: 2 }}>
        <Typography variant="body2">
          &copy; 2025 EcoHero | Built for sustainability with 💚
        </Typography>
      </Box>
    </Box>
  );
};

export default EcoHero;