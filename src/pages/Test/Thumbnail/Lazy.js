/**
 * pages/Test/Confirm/index.js
 */

import React from 'react';
import Thumbnail from 'components/Thumbnail';

import ImageA from './Assets/ImageA.jpg';

const TestThumbnailLazy = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__form">
        <h1 style={{ marginBottom: 30 }}>Test Thumbnail Lazy</h1>
        <div
          style={{
            marginTop: 30,
          }}
        >
          <p>
            Proin porta, magna ut rhoncus auctor, justo quam elementum lorem, eu
            suscipit orci sem at eros. Vestibulum feugiat elit ex, vitae
            consequat magna fermentum nec. Duis et pharetra nulla. Nam commodo
            lorem a nunc consequat ultrices. Nunc pellentesque purus maximus
            justo lobortis, sed tincidunt lacus fringilla. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Praesent cursus mollis elit sit
            amet imperdiet.
          </p>
          <p>
            Vestibulum convallis imperdiet diam, at rhoncus sem pulvinar eget.
            Nulla non tellus ac ex rutrum mattis. Integer condimentum diam id
            est tempor, quis commodo enim iaculis. Etiam imperdiet, est et
            ultricies pulvinar, quam velit ullamcorper sem, vel finibus nisl
            purus id metus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Pellentesque sit amet
            sollicitudin massa. Duis sed egestas risus, vitae cursus sem. Aenean
            rutrum eros ut eros dictum, ac fringilla lectus fringilla.
          </p>
          <Thumbnail imagePath={ImageA} imageProps={{ height: 200 }} />
          <h2>
            Pellentesque auctor leo eu metus viverra, non elementum lorem
            pretium.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            fringilla enim sit amet mattis dictum. Nulla convallis tincidunt
            leo, at hendrerit augue bibendum non. Sed efficitur, risus quis
            congue feugiat, odio felis tristique ante, in blandit neque eros et
            nunc. Aenean ut lorem velit. Fusce turpis nulla, maximus vitae
            faucibus at, ultrices elementum purus. Mauris sit amet turpis id est
            placerat mollis eu et diam. Quisque sit amet velit vel erat
            efficitur hendrerit. Nulla vehicula eros aliquam volutpat egestas.
            Morbi orci risus, dapibus posuere iaculis in, placerat eget purus.
            Praesent lacinia efficitur vulputate.
          </p>

          <p>
            Aenean turpis nibh, rhoncus at egestas pharetra, consequat egestas
            quam. Proin sed ullamcorper urna, quis vehicula arcu. Proin at
            blandit elit. In consequat consequat orci, ut iaculis dolor
            sollicitudin quis. Integer scelerisque eros erat. Cras pellentesque
            ultricies libero, hendrerit luctus felis mattis eu. Aenean eget dui
            a nibh molestie tincidunt. Aenean quis semper ligula. Nunc a erat
            metus. Phasellus eleifend tristique nibh eu luctus. Morbi lacinia
            nisi ut lorem accumsan dapibus. Integer iaculis tempus condimentum.
            Phasellus ornare aliquam libero, quis lobortis ligula malesuada
            vitae.
          </p>

          <Thumbnail imagePath={ImageA} />

          <p>
            Donec eget tincidunt sem, non tristique nulla. Mauris sodales ac
            tellus id vestibulum. Nunc tincidunt odio enim, commodo faucibus mi
            venenatis at. Donec ut turpis elementum, gravida eros vitae,
            fringilla ligula. Curabitur quis fringilla augue. Vestibulum vitae
            mattis nisi, nec sodales tortor. Vestibulum dolor ex, aliquam in
            purus eget, aliquet sollicitudin elit. Maecenas id magna quis orci
            lobortis ornare.
          </p>

          <h2>
            Vestibulum pharetra eleifend mauris, eu aliquam magna vulputate in.
          </h2>
          <p>
            Curabitur suscipit malesuada enim. Cras varius nisi urna, vitae
            auctor metus accumsan non. Etiam eu sollicitudin tellus. Aliquam
            laoreet risus ut ante volutpat varius. Duis erat magna, scelerisque
            at fermentum sed, iaculis quis eros. Vestibulum lobortis egestas mi
            eu interdum
          </p>

          <p>
            Nullam sed sem nibh. Curabitur pharetra nec purus ac eleifend. In
            tincidunt augue sed molestie ornare. Aenean volutpat leo dui, at
            ultrices neque posuere sed. Maecenas aliquam, nisi sed efficitur
            aliquet, velit augue euismod sem, sed sollicitudin sapien massa eget
            dolor. Vestibulum laoreet mauris massa, at pharetra eros varius in.
            Phasellus dictum pellentesque ultricies. Nam lacinia dapibus felis
            id ultrices.
          </p>

          <Thumbnail imagePath={ImageA} />

          <p>
            Cras id viverra nunc. Aliquam nec leo urna. Suspendisse potenti.
            Curabitur tempor vulputate tellus nec pretium. Mauris congue
            elementum ipsum vitae eleifend. Etiam maximus, justo eu aliquet
            luctus, purus urna commodo massa, a dapibus libero est at augue.
            Aliquam scelerisque ex sit amet neque egestas, fermentum semper
            turpis fermentum. Vestibulum suscipit varius urna.
          </p>

          <h2>
            Donec efficitur blandit elementum. Nullam non tristique justo.
          </h2>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
            magna massa, cursus et venenatis eu, finibus in enim. Nulla nulla
            libero, mollis in ornare quis, pretium quis neque. Sed ut tempor
            est. Fusce aliquet interdum laoreet. Maecenas mattis lacus vitae
            magna lobortis vulputate. Vivamus vestibulum augue pulvinar elit
            vulputate, eleifend imperdiet ante scelerisque. Quisque in velit id
            purus iaculis elementum. Integer aliquet, tortor at bibendum
            tincidunt, neque sapien varius urna, id vulputate erat dui eu nisi.
            Phasellus nec maximus lorem.
          </p>

          <Thumbnail imagePath={ImageA} />

          <p>
            Morbi viverra ornare dignissim. Sed sed tortor at magna convallis
            imperdiet. Nulla tempus dignissim dui, vel semper sapien eleifend
            id. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Vivamus id enim lorem. Suspendisse vitae accumsan nibh. Sed aliquam
            lectus in metus pharetra, a maximus lorem sollicitudin. Aliquam at
            metus ut magna volutpat ultricies at nec risus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Mauris ligula orci, sollicitudin lobortis aliquam
            quis, convallis vitae turpis. Proin faucibus varius ante et semper.
            Proin tempus maximus aliquet. Fusce feugiat sollicitudin maximus.
            Aliquam pulvinar, ligula in laoreet elementum, tortor dui suscipit
            neque, vitae tempor lacus augue vel justo.
          </p>

          <Thumbnail imagePath={ImageA} />
          <h2>
            Pellentesque auctor leo eu metus viverra, non elementum lorem
            pretium.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            fringilla enim sit amet mattis dictum. Nulla convallis tincidunt
            leo, at hendrerit augue bibendum non. Sed efficitur, risus quis
            congue feugiat, odio felis tristique ante, in blandit neque eros et
            nunc. Aenean ut lorem velit. Fusce turpis nulla, maximus vitae
            faucibus at, ultrices elementum purus. Mauris sit amet turpis id est
            placerat mollis eu et diam. Quisque sit amet velit vel erat
            efficitur hendrerit. Nulla vehicula eros aliquam volutpat egestas.
            Morbi orci risus, dapibus posuere iaculis in, placerat eget purus.
            Praesent lacinia efficitur vulputate.
          </p>

          <Thumbnail imagePath={ImageA} />

          <p>
            Aenean turpis nibh, rhoncus at egestas pharetra, consequat egestas
            quam. Proin sed ullamcorper urna, quis vehicula arcu. Proin at
            blandit elit. In consequat consequat orci, ut iaculis dolor
            sollicitudin quis. Integer scelerisque eros erat. Cras pellentesque
            ultricies libero, hendrerit luctus felis mattis eu. Aenean eget dui
            a nibh molestie tincidunt. Aenean quis semper ligula. Nunc a erat
            metus. Phasellus eleifend tristique nibh eu luctus. Morbi lacinia
            nisi ut lorem accumsan dapibus. Integer iaculis tempus condimentum.
            Phasellus ornare aliquam libero, quis lobortis ligula malesuada
            vitae.
          </p>

          <Thumbnail imagePath={ImageA} />

          <p>
            Donec eget tincidunt sem, non tristique nulla. Mauris sodales ac
            tellus id vestibulum. Nunc tincidunt odio enim, commodo faucibus mi
            venenatis at. Donec ut turpis elementum, gravida eros vitae,
            fringilla ligula. Curabitur quis fringilla augue. Vestibulum vitae
            mattis nisi, nec sodales tortor. Vestibulum dolor ex, aliquam in
            purus eget, aliquet sollicitudin elit. Maecenas id magna quis orci
            lobortis ornare.
          </p>

          <h2>
            Vestibulum pharetra eleifend mauris, eu aliquam magna vulputate in.
          </h2>
          <p>
            Curabitur suscipit malesuada enim. Cras varius nisi urna, vitae
            auctor metus accumsan non. Etiam eu sollicitudin tellus. Aliquam
            laoreet risus ut ante volutpat varius. Duis erat magna, scelerisque
            at fermentum sed, iaculis quis eros. Vestibulum lobortis egestas mi
            eu interdum
          </p>

          <Thumbnail imagePath={ImageA} />

          <p>
            Nullam sed sem nibh. Curabitur pharetra nec purus ac eleifend. In
            tincidunt augue sed molestie ornare. Aenean volutpat leo dui, at
            ultrices neque posuere sed. Maecenas aliquam, nisi sed efficitur
            aliquet, velit augue euismod sem, sed sollicitudin sapien massa eget
            dolor. Vestibulum laoreet mauris massa, at pharetra eros varius in.
            Phasellus dictum pellentesque ultricies. Nam lacinia dapibus felis
            id ultrices.
          </p>

          <p>
            Cras id viverra nunc. Aliquam nec leo urna. Suspendisse potenti.
            Curabitur tempor vulputate tellus nec pretium. Mauris congue
            elementum ipsum vitae eleifend. Etiam maximus, justo eu aliquet
            luctus, purus urna commodo massa, a dapibus libero est at augue.
            Aliquam scelerisque ex sit amet neque egestas, fermentum semper
            turpis fermentum. Vestibulum suscipit varius urna.
          </p>

          <Thumbnail imagePath={ImageA} />

          <h2>
            Donec efficitur blandit elementum. Nullam non tristique justo.
          </h2>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
            magna massa, cursus et venenatis eu, finibus in enim. Nulla nulla
            libero, mollis in ornare quis, pretium quis neque. Sed ut tempor
            est. Fusce aliquet interdum laoreet. Maecenas mattis lacus vitae
            magna lobortis vulputate. Vivamus vestibulum augue pulvinar elit
            vulputate, eleifend imperdiet ante scelerisque. Quisque in velit id
            purus iaculis elementum. Integer aliquet, tortor at bibendum
            tincidunt, neque sapien varius urna, id vulputate erat dui eu nisi.
            Phasellus nec maximus lorem.
          </p>

          <Thumbnail imagePath={ImageA} imageProps={{ height: 200 }} />

          <p>
            Morbi viverra ornare dignissim. Sed sed tortor at magna convallis
            imperdiet. Nulla tempus dignissim dui, vel semper sapien eleifend
            id. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Vivamus id enim lorem. Suspendisse vitae accumsan nibh. Sed aliquam
            lectus in metus pharetra, a maximus lorem sollicitudin. Aliquam at
            metus ut magna volutpat ultricies at nec risus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Mauris ligula orci, sollicitudin lobortis aliquam
            quis, convallis vitae turpis. Proin faucibus varius ante et semper.
            Proin tempus maximus aliquet. Fusce feugiat sollicitudin maximus.
            Aliquam pulvinar, ligula in laoreet elementum, tortor dui suscipit
            neque, vitae tempor lacus augue vel justo.
          </p>

          <Thumbnail imagePath={ImageA} />
          <h2>
            Pellentesque auctor leo eu metus viverra, non elementum lorem
            pretium.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            fringilla enim sit amet mattis dictum. Nulla convallis tincidunt
            leo, at hendrerit augue bibendum non. Sed efficitur, risus quis
            congue feugiat, odio felis tristique ante, in blandit neque eros et
            nunc. Aenean ut lorem velit. Fusce turpis nulla, maximus vitae
            faucibus at, ultrices elementum purus. Mauris sit amet turpis id est
            placerat mollis eu et diam. Quisque sit amet velit vel erat
            efficitur hendrerit. Nulla vehicula eros aliquam volutpat egestas.
            Morbi orci risus, dapibus posuere iaculis in, placerat eget purus.
            Praesent lacinia efficitur vulputate.
          </p>

          <Thumbnail imagePath={ImageA} imageProps={{ height: 200 }} />

          <p>
            Aenean turpis nibh, rhoncus at egestas pharetra, consequat egestas
            quam. Proin sed ullamcorper urna, quis vehicula arcu. Proin at
            blandit elit. In consequat consequat orci, ut iaculis dolor
            sollicitudin quis. Integer scelerisque eros erat. Cras pellentesque
            ultricies libero, hendrerit luctus felis mattis eu. Aenean eget dui
            a nibh molestie tincidunt. Aenean quis semper ligula. Nunc a erat
            metus. Phasellus eleifend tristique nibh eu luctus. Morbi lacinia
            nisi ut lorem accumsan dapibus. Integer iaculis tempus condimentum.
            Phasellus ornare aliquam libero, quis lobortis ligula malesuada
            vitae.
          </p>

          <p>
            Donec eget tincidunt sem, non tristique nulla. Mauris sodales ac
            tellus id vestibulum. Nunc tincidunt odio enim, commodo faucibus mi
            venenatis at. Donec ut turpis elementum, gravida eros vitae,
            fringilla ligula. Curabitur quis fringilla augue. Vestibulum vitae
            mattis nisi, nec sodales tortor. Vestibulum dolor ex, aliquam in
            purus eget, aliquet sollicitudin elit. Maecenas id magna quis orci
            lobortis ornare.
          </p>

          <h2>
            Vestibulum pharetra eleifend mauris, eu aliquam magna vulputate in.
          </h2>
          <p>
            Curabitur suscipit malesuada enim. Cras varius nisi urna, vitae
            auctor metus accumsan non. Etiam eu sollicitudin tellus. Aliquam
            laoreet risus ut ante volutpat varius. Duis erat magna, scelerisque
            at fermentum sed, iaculis quis eros. Vestibulum lobortis egestas mi
            eu interdum
          </p>

          <p>
            Nullam sed sem nibh. Curabitur pharetra nec purus ac eleifend. In
            tincidunt augue sed molestie ornare. Aenean volutpat leo dui, at
            ultrices neque posuere sed. Maecenas aliquam, nisi sed efficitur
            aliquet, velit augue euismod sem, sed sollicitudin sapien massa eget
            dolor. Vestibulum laoreet mauris massa, at pharetra eros varius in.
            Phasellus dictum pellentesque ultricies. Nam lacinia dapibus felis
            id ultrices.
          </p>

          <p>
            Cras id viverra nunc. Aliquam nec leo urna. Suspendisse potenti.
            Curabitur tempor vulputate tellus nec pretium. Mauris congue
            elementum ipsum vitae eleifend. Etiam maximus, justo eu aliquet
            luctus, purus urna commodo massa, a dapibus libero est at augue.
            Aliquam scelerisque ex sit amet neque egestas, fermentum semper
            turpis fermentum. Vestibulum suscipit varius urna.
          </p>

          <h2>
            Donec efficitur blandit elementum. Nullam non tristique justo.
          </h2>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec
            magna massa, cursus et venenatis eu, finibus in enim. Nulla nulla
            libero, mollis in ornare quis, pretium quis neque. Sed ut tempor
            est. Fusce aliquet interdum laoreet. Maecenas mattis lacus vitae
            magna lobortis vulputate. Vivamus vestibulum augue pulvinar elit
            vulputate, eleifend imperdiet ante scelerisque. Quisque in velit id
            purus iaculis elementum. Integer aliquet, tortor at bibendum
            tincidunt, neque sapien varius urna, id vulputate erat dui eu nisi.
            Phasellus nec maximus lorem.
          </p>

          <p>
            Morbi viverra ornare dignissim. Sed sed tortor at magna convallis
            imperdiet. Nulla tempus dignissim dui, vel semper sapien eleifend
            id. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Vivamus id enim lorem. Suspendisse vitae accumsan nibh. Sed aliquam
            lectus in metus pharetra, a maximus lorem sollicitudin. Aliquam at
            metus ut magna volutpat ultricies at nec risus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Mauris ligula orci, sollicitudin lobortis aliquam
            quis, convallis vitae turpis. Proin faucibus varius ante et semper.
            Proin tempus maximus aliquet. Fusce feugiat sollicitudin maximus.
            Aliquam pulvinar, ligula in laoreet elementum, tortor dui suscipit
            neque, vitae tempor lacus augue vel justo.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default TestThumbnailLazy;
