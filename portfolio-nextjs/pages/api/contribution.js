import { fetchGitHubStats } from 'contribution';

export default async function handler(req, res) {
  try {
    const stats = await fetchGitHubStats('StephenOnyeka');
    res.status(200).json(stats);
  } catch (error) {
    console.error('GitHub fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub contributions' });
  }
}
