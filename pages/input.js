import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { POST_SUBSCRIBE } from '../pages/categories/schema';

function Subscribe() {
    const [subscribeData, setDataSubscribe] = useState(null);
    let input;
    const [dataSubscribe] = useMutation(POST_SUBSCRIBE);

    const handleSubmit = async (val) => {
      const responseData = await dataSubscribe({
        variables: {
            email: val
        }
      })
      if (responseData) {
        setDataSubscribe(responseData);
      }
    };
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(input.value);
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">subscribe</button>
          <p>{subscribeData ? subscribeData.data.subscribe.status.message : null}</p>
        </form>
      </div>
    );
  }

  export default Subscribe;
