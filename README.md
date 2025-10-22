# Awarehouse CI/CD Demo Project

This project demonstrates a complete **Continuous Integration/Continuous Deployment (CI/CD)** pipeline using GitHub Actions for the Awarehouse club presentation.

## 🎯 Project Overview

A simple website for the Awarehouse "dev & data" club that builds innovative solutions for Bangkok (BMA - Bangkok Metropolitan Administration). This project showcases:

- **Continuous Integration**: Automated testing on every code push
- **Continuous Deployment**: Automatic deployment to GitHub Pages when tests pass
- **Modern web development practices**: Clean HTML, CSS, and JavaScript

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Testing**: Jest
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages
- **Version Control**: Git

## 📁 Project Structure

```
awarehouse-cicd-demo/
├── index.html              # Main landing page
├── style.css               # Styling with Awarehouse brand colors
├── app.js                  # Main JavaScript functionality
├── app.test.js             # Jest test suite
├── package.json            # Project dependencies and scripts
├── awarehouse_logo.png     # Club logo
└── .github/
    └── workflows/
        └── ci-cd.yml       # GitHub Actions workflow
```

## 🧪 Testing

The project includes comprehensive tests for the JavaScript functionality:

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage
```

## 🔄 CI/CD Pipeline

### Continuous Integration (CI)
- **Triggers**: Every push to `main` branch and pull requests
- **Steps**:
  1. ✅ Checkout repository
  2. ✅ Setup Node.js environment
  3. ✅ Install dependencies
  4. ✅ Run Jest tests
  5. ✅ Upload build artifacts

### Continuous Deployment (CD)
- **Triggers**: Only after successful CI tests on `main` branch
- **Steps**:
  1. ✅ Configure GitHub Pages
  2. ✅ Deploy to GitHub Pages

## 🌐 Deployment

The website is automatically deployed to GitHub Pages when:
1. Code is pushed to the `main` branch
2. All tests pass successfully
3. The build artifact is uploaded successfully

**Note**: Deployment only occurs on direct pushes to `main`, not on pull requests.

## 🎨 Features

- **Responsive Design**: Works on desktop and mobile devices
- **Club Branding**: Uses Awarehouse's signature green color (rgb(5, 117, 73))
- **Interactive Elements**: Functional JavaScript with button interactions
- **Test Coverage**: Comprehensive test suite for reliability
- **Automated Deployment**: Zero-touch deployment process

## 📋 How to Use This Demo

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd awarehouse-cicd-demo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run tests locally**:
   ```bash
   npm test
   ```

4. **Test the CI/CD pipeline**:
   - Make any change to the code
   - Commit and push to `main` branch
   - Watch GitHub Actions run automatically
   - See the updated site deployed to GitHub Pages

## 🔧 Configuration

### GitHub Pages Setup
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` and `/ (root)`
4. Save settings

### GitHub Actions
The workflow is configured in `.github/workflows/ci-cd.yml` with proper permissions:
- `pages: write` - Allows deployment to GitHub Pages
- `id-token: write` - Required for OAuth token authentication

---

**Awarehouse Club** - Building innovative solutions for Bangkok's communities 🏙️