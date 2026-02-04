const yogaPosesData = [
    {
      id: '1',
      name: 'Mountain Pose',
      sanskrit: 'Tadasana',
      image: require('../../assets/images/Tadasan.jpg'),
      description: 'A standing pose for posture and balance.',
      benefits: ['Improves posture', 'Strengthens legs', 'Enhances awareness'],
      steps: [
        'Stand tall with feet together and arms at your sides.',
        'Distribute weight evenly across both feet.',
        'Engage thighs and lift the chest.',
        'Reach arms overhead or keep them beside you.',
        'Breathe deeply and hold for 30 seconds.'
      ],
    },
    {
      id: '2',
      name: 'Downward-Facing Dog',
      sanskrit: 'Adho Mukha Svanasana',
      image: require('../../assets/images/Adho_Mukha_Svanasana.jpg'),
      description: 'An energizing full-body stretch.',
      benefits: ['Lengthens spine', 'Stretches hamstrings', 'Builds strength'],
      steps: [
        'Start in a plank position.',
        'Lift hips up and back, forming an inverted V.',
        'Press heels toward the ground.',
        'Keep spine long and shoulders away from ears.',
        'Hold for 1–3 minutes.'
      ],
    },
    {
      id: '3',
      name: 'Child’s Pose',
      sanskrit: 'Balasana',
      image: require('../../assets/images/Balasan.jpg'),
      description: 'A resting pose for relaxation and stress relief.',
      benefits: ['Stretches spine and hips', 'Calms the mind', 'Relieves fatigue'],
      steps: [
        'Kneel and sit back on heels.',
        'Lower your torso forward onto the mat.',
        'Extend arms forward or keep beside your body.',
        'Rest forehead on the mat.',
        'Breathe slowly and deeply.'
      ],
    },
    {
      id: '4',
      name: 'Tree Pose',
      sanskrit: 'Vrikshasana',
      image: require('../../assets/images/TreePose.jpg'),
      description: 'Improves balance and focus.',
      benefits: ['Strengthens legs', 'Enhances concentration', 'Improves posture'],
      steps: [
        'Stand tall in mountain pose.',
        'Lift one foot and place it on the opposite inner thigh or calf.',
        'Bring palms together at the heart.',
        'Keep gaze steady ahead.',
        'Hold and switch sides.'
      ],
    },
    {
      id: '5',
      name: 'Warrior I',
      sanskrit: 'Virabhadrasana I',
      image: require('../../assets/images/Virabhadrasana_1.jpg'),
      description: 'A strong standing pose that opens hips and chest.',
      benefits: ['Strengthens legs', 'Opens chest', 'Improves stamina'],
      steps: [
        'Start in mountain pose.',
        'Step one foot back, bend front knee.',
        'Raise arms overhead.',
        'Square hips forward.',
        'Hold and breathe.'
      ],
    },
    {
      id: '6',
      name: 'Warrior II',
      sanskrit: 'Virabhadrasana II',
      image: require('../../assets/images/Virabhadrasana_2.jpg'),
      description: 'Builds lower body strength and stability.',
      benefits: ['Strengthens thighs', 'Improves focus', 'Opens hips'],
      steps: [
        'From Warrior I, open hips to the side.',
        'Extend arms parallel to floor.',
        'Gaze over front hand.',
        'Keep front knee bent.',
        'Hold and switch sides.'
      ],
    },
    {
      id: '7',
      name: 'Triangle Pose',
      sanskrit: 'Trikonasana',
      image: require('../../assets/images/Trikonasana.jpg'),
      description: 'Stretches spine, legs, and torso.',
      benefits: ['Improves flexibility', 'Stimulates digestion', 'Strengthens legs'],
      steps: [
        'Stand with legs wide apart.',
        'Turn front foot out, back foot slightly in.',
        'Extend arms and reach over front leg.',
        'Lower hand to shin or floor.',
        'Lift top arm and gaze upward.'
      ],
    },
    {
      id: '8',
      name: 'Seated Forward Bend',
      sanskrit: 'Paschimottanasana',
      image: require('../../assets/images/Paschimottanasana.jpg'),
      description: 'A calming pose that stretches the spine.',
      benefits: ['Relieves stress', 'Stretches hamstrings', 'Improves digestion'],
      steps: [
        'Sit with legs extended forward.',
        'Inhale, lengthen spine.',
        'Exhale, fold forward from hips.',
        'Hold feet or shins.',
        'Breathe and relax.'
      ],
    },
    {
      id: '9',
      name: 'Bridge Pose',
      sanskrit: 'Setu Bandhasana',
      image: require('../../assets/images/Setu_Bandhasana.jpg'),
      description: 'A backbend that opens chest and strengthens core.',
      benefits: ['Strengthens back', 'Opens chest', 'Stimulates organs'],
      steps: [
        'Lie on back with knees bent, feet flat.',
        'Arms at sides, palms down.',
        'Lift hips off the mat.',
        'Clasp hands under back.',
        'Hold for 30 seconds.'
      ],
    },
    {
      id: '10',
      name: 'Cobra Pose',
      sanskrit: 'Bhujangasana',
      image: require('../../assets/images/Bhujangasana.jpg'),
      description: 'A gentle backbend that improves spinal flexibility.',
      benefits: ['Opens chest', 'Strengthens spine', 'Reduces fatigue'],
      steps: [
        'Lie on belly, hands under shoulders.',
        'Press into hands and lift chest.',
        'Keep elbows close to ribs.',
        'Gaze forward or slightly upward.',
        'Hold and release gently.'
      ],
    },
    {
      id: '11',
      name: 'Cat-Cow Pose',
      sanskrit: 'Marjaryasana–Bitilasana',
      image: require('../../assets/images/Marjaryasana_Bitilasana.jpg'),
      description: 'A flowing movement to warm up the spine.',
      benefits: ['Improves mobility', 'Relieves back pain', 'Coordinates breath'],
      steps: [
        'Start on hands and knees.',
        'Inhale, arch back (cow), gaze up.',
        'Exhale, round spine (cat), tuck chin.',
        'Repeat several cycles.'
      ],
    },
    {
      id: '12',
      name: 'Chair Pose',
      sanskrit: 'Utkatasana',
      image: require('../../assets/images/Utkatasana.jpg'),
      description: 'Strengthens thighs and increases endurance.',
      benefits: ['Builds strength', 'Improves balance', 'Stimulates diaphragm'],
      steps: [
        'Stand in mountain pose.',
        'Bend knees, lowering hips.',
        'Raise arms overhead.',
        'Keep spine long.',
        'Hold and breathe.'
      ],
    },
    {
      id: '13',
      name: 'Boat Pose',
      sanskrit: 'Navasana',
      image: require('../../assets/images/Navasana.jpg'),
      description: 'A core-strengthening seated pose.',
      benefits: ['Strengthens abs', 'Improves balance', 'Stimulates kidneys'],
      steps: [
        'Sit with knees bent, feet on floor.',
        'Lift feet off ground.',
        'Extend arms forward.',
        'Straighten legs (optional).',
        'Hold for 15–30 seconds.'
      ],
    },
    {
      id: '14',
      name: 'Plank Pose',
      sanskrit: 'Phalakasana',
      image: require('../../assets/images/Phalakasana.jpg'),
      description: 'Builds strength and stability in the entire body.',
      benefits: ['Tones core', 'Strengthens arms', 'Improves posture'],
      steps: [
        'Start on hands and toes.',
        'Align shoulders over wrists.',
        'Engage core and glutes.',
        'Keep body in a straight line.',
        'Hold for 30 seconds to 1 minute.'
      ],
    },
    {
      id: '15',
      name: 'Corpse Pose',
      sanskrit: 'Savasana',
      image: require('../../assets/images/Savasana.jpg'),
      description: 'A relaxation pose to end a session.',
      benefits: ['Relieves stress', 'Promotes rest', 'Calms nervous system'],
      steps: [
        'Lie on back, arms beside body.',
        'Let legs fall naturally outward.',
        'Close eyes and relax muscles.',
        'Focus on breathing.',
        'Remain for 5–10 minutes.'
      ],
    },
    {
      id: '16',
      name: 'Legs-Up-the-Wall',
      sanskrit: 'Viparita Karani',
      image: require('../../assets/images/Viparita_Karani.jpg'),
      description: 'A gentle inversion for relaxation and circulation.',
      benefits: ['Reduces swelling', 'Relieves tired legs', 'Calms the mind'],
      steps: [
        'Lie on your back near a wall.',
        'Extend legs upward, resting on the wall.',
        'Arms relaxed by sides.',
        'Close eyes and breathe.',
        'Hold for 5–15 minutes.'
      ],
    },
    {
      id: '17',
      name: 'Happy Baby Pose',
      sanskrit: 'Ananda Balasana',
      image: require('../../assets/images/Ananda_Balasana.jpg'),
      description: 'A playful pose that gently opens hips.',
      benefits: ['Releases lower back', 'Opens hips', 'Relieves fatigue'],
      steps: [
        'Lie on back and bend knees.',
        'Hold outer edges of feet.',
        'Draw knees toward armpits.',
        'Keep spine on floor.',
        'Rock gently side to side.'
      ],
    },
    {
      id: '18',
      name: 'Reclined Twist',
      sanskrit: 'Supta Matsyendrasana',
      image: require('../../assets/images/Supta_Matsyendrasana.jpg'),
      description: 'A gentle spinal twist for detox and release.',
      benefits: ['Improves digestion', 'Releases back tension', 'Stimulates organs'],
      steps: [
        'Lie on back, arms extended.',
        'Bend knees and drop to one side.',
        'Gaze opposite direction.',
        'Breathe into the twist.',
        'Repeat on other side.'
      ],
    },
    {
      id: '19',
      name: 'Camel Pose',
      sanskrit: 'Ustrasana',
      image: require('../../assets/images/Ustrasana.jpg'),
      description: 'A deep backbend that opens the chest.',
      benefits: ['Stretches entire front body', 'Boosts energy', 'Improves posture'],
      steps: [
        'Kneel on mat, knees hip-width.',
        'Place hands on lower back.',
        'Lean back and reach for heels.',
        'Lift chest and press hips forward.',
        'Hold and breathe gently.'
      ],
    },
    {
      id: '20',
      name: 'Low Lunge',
      sanskrit: 'Anjaneyasana',
      image: require('../../assets/images/anjaneyasana.jpg'),
      description: 'A hip-opening pose with a stretch through thighs.',
      benefits: ['Opens hips', 'Stretches thighs', 'Improves stability'],
      steps: [
        'From downward dog, step foot between hands.',
        'Lower back knee to floor.',
        'Lift arms overhead.',
        'Sink hips forward.',
        'Hold and switch sides.'
      ],
    },
  ];
  
  export default yogaPosesData;
  