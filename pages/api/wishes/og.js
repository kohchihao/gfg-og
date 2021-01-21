import { getScreenshot } from '@lib/og/chromeApi';
import { getHtml } from '@lib/og/template';
import { renderToString } from 'react-dom/server';
import admin from '@utils/admin-firebase';

/**
 * Most common OG image size
 */
const DefaultImageSize = {
  height: 630,
  width: 1200,
};

export default async (req, res) => {
  try {
    const id = req.query.id;
    if (!id) {
      throw new Error('Missing query param');
    }

    const snapshot = await admin.firestore().collection('wishes').doc(id).get();
    if (!snapshot.exists) {
      throw new Error('Wish does not exists');
    }
    const html = renderToString(getHtml(snapshot.data()));
    const file = await getScreenshot({
      html,
      width: DefaultImageSize.width,
      height: DefaultImageSize.height,
      isDev: !process.env.IS_PRODUCTION,
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', `image/png`);
    res.setHeader(
      'Cache-Control',
      `max-age=${60 * 60 * 24 * 365}, public, stale-while-revalidate`
    );
    res.end(file);
  } catch (e) {
    console.error(e);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<div>Not Found</div>');
  }
};
