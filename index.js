const sharp = require('sharp');

const fastify = require('fastify')({
  logger: false,
});

const staticDir = 'static';

// imageId is name of file in static folder
// scale is 0.5x, 1x, 2x and so on
// or it's custom 100x200, 200x300, 300x100 and so on
fastify.get('/:imageId/:scale', async function (request, reply) {
  const { imageId, scale } = request.params;
  const image = sharp(`${staticDir}/1.jpg`);

  if (!image) {
    reply.send(`Image with ID ${imageId} is not found.`);
  }

  const scaleFactors = scale.split('x');

  // custom resize
  if (scaleFactors[1] != '') {
    const width = Number(scaleFactors[0]);
    const height = Number(scaleFactors[1]);
    // console.log(`Resized to ${width}x${height}`);

    await image.resize(width, height, { fit: 'contain' });
  }
  // relative resize
  // skip if it's 1x
  else if (scaleFactors[0] != '1') {
    const scaleFactor = scaleFactors[0];
    const metadata = await image.metadata();
    // console.log(`Resized relatively by ${scaleFactor}`);

    await image.resize(
      Math.round(metadata.width * scaleFactor),
      Math.round(metadata.height * scaleFactor),
      { fit: 'contain' }
    );
  }

  reply.send(image);
});

// Run the server
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
