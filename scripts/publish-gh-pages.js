
import { execSync } from 'child_process';

try {
  console.log('Building website...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Publishing to GitHub Pages...');
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });

  console.log('Website successfully published!');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}
